import React, { useEffect, useState, forwardRef } from 'react';
import { useStyles } from './Teams.styles';
import { List, ListItem, ListItemText, Button, Grid,
  Divider, Typography, TextField, Input, IconButton, Tooltip } from '@material-ui/core';
import { deleteTeamById, getAllTeams } from '../../requests/teams';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Preloader from '../Preloader/Preloader';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});


const alertTypes = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
}

const infoBoxPrototype = {
  show: false,
  type: alertTypes.SUCCESS,
  message: 'Отборът беше изтрит успешно!'
}

const Teams = () => {
  const styles = useStyles();
  const [teamsList, setTeamsList] = useState([]);
  const [activeRow, setActiveRow] = useState(null);
  const [fileName, setFileName] = useState('');
  const [infoBox, setInfoBox] = useState(infoBoxPrototype);
  const [showDialog, setShowDialog] = useState(false);
  const [teamForDelete, setTeamForDelete] = useState(null);

  const closeInfoBox = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setInfoBox({...infoBox, show: false});
  };

  const uploadedFile = (event) => {
    const file = (event.target.value).split('\\');
    setFileName(file[file.length - 1]);
  }

  useEffect(() => {
    getAllTeams().then(x => {
      setTeamsList(x);
    }).catch(e => console.log (e));
  }, []);


  const deleteTeam = (id) => {
    deleteTeamById(id).then(result => {
      if (result.message) {
        setInfoBox({
          show: true,
          type: alertTypes.ERROR,
          message: result.message
        });
        return;
      }
      const newList = teamsList.filter(row => row.teamId !== result.teamId);
      setTeamsList(newList);
      setInfoBox({
        show: true,
        type: alertTypes.SUCCESS,
        message: 'Отборът беше изтрит успешно!'
      });
    })
    setShowDialog(false);
    setTeamForDelete(null);
  }

  const prepareDelete = (id) => {
    setShowDialog(true);
    setTeamForDelete(id);
  }


  const allTeams = () => {
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} onMouseLeave={() => setActiveRow(null)}>
        {
          teamsList.map(team =>
          <React.Fragment key={team.teamId}>
            <ListItem  onMouseEnter={() => setActiveRow(team.teamId)} style={activeRow === team.teamId ? {backgroundColor: 'antiquewhite'} : null }>
              <span className={styles.imageHolder}>
                <img src={team.logoURL} alt='team logo' className={styles.imageStyle}/>
              </span>        
              <ListItemText primary={team.teamName} secondary={team.teamCity} />
              {
                activeRow === team.teamId
                ? <div>
                    <IconButton>
                      <Tooltip title='Edit' arrow><EditIcon/></Tooltip>
                    </IconButton>
                    <IconButton onClick={()=> prepareDelete(team.teamId)}>
                      <Tooltip title='Delete' arrow><DeleteIcon/></Tooltip>
                    </IconButton>
                  </div>
                : null
              }
              
            </ListItem>
            <Divider/>
          </React.Fragment>
          )
        }
      </List>
    )
  }

  return (
    <Grid container spacing={10}>
      <Grid item xs={5}>
        {
          teamsList.length
          ? allTeams()
          : <Preloader />
        }
      </Grid>
      <Grid item xs={7}>
        <div className={styles.addNewTeamBar}>
          <Typography variant='h5'>Добавяне на нов отбор</Typography>
        </div>
        <TextField
          name='teamName'
          required
          variant='outlined'
          label='Име на отбора'
          fullWidth
          placeholder='Името на отбора'
          className={styles.inputStyle}
        />
        <TextField
          name='teamCity'
          required
          variant='outlined'
          label='Град'
          fullWidth
          defaultValue='София'
          style={{margin: '20px 0px 20px 0px'}}
          className={styles.inputStyle}
        />
        <div className={styles.addNewTeamBar}>
          <span>
            <label htmlFor='fileNameId'>
              <Input accept='image/*' id='fileNameId' multiple={false} type='file' style={{display: 'none'}} onChange={uploadedFile} />
              <Button size='medium' variant='contained' startIcon={<PhotoCameraIcon/>} color='secondary' component='span'>Избери лого</Button>
            </label>
            <span style={{marginLeft: 10, fontStyle: 'italic'}}>{fileName}</span>
          </span>
          <Button startIcon={<DoneIcon/>} color='primary' variant='contained' size='medium'>добави</Button>
        </div>
      </Grid>
      <Snackbar open={infoBox.show} autoHideDuration={4000} onClose={closeInfoBox}>
        <Alert onClose={closeInfoBox} severity={infoBox.type} sx={{ width: '100%' }}>
          {infoBox.message}
        </Alert>
      </Snackbar>
      {
        showDialog
        ? <ConfirmDialog title='Потвърди' text='Сигурни ли сте, че желаете да изриете отборът?' cancelFunc={() => setShowDialog(false)} okFunc={() => deleteTeam(teamForDelete)}/>
        : null
      }
    </Grid>
  )
}

export default Teams;
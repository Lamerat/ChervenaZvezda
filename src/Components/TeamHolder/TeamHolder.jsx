import React, { useState } from 'react';
import { Container, Divider, Paper, Typography, IconButton } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { isBrowser } from 'react-device-detect';
import { useStyles } from './TeamHolder.styles';
import PlayerBox from '../PlayerBox/PlayerBox';
import { BrowserView, MobileView } from "react-device-detect";
import TuneIcon from '@material-ui/icons/Tune';


const tempPlayers = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    photo: './images/moni.jpg',
    number: 13,
    position: 'вратар',
    birthDate: '1993-05-12',
    height: 180,
    weight: 91,
  },
  {
    id: 2,
    firstName: 'Васил',
    lastName: 'Василев',
    photo: './images/kiki.jpg',
    number: 8,
    position: 'Защитник',
    birthDate: '1992-03-11',
    height: 177,
    weight: 87,
  },
  {
    id: 3,
    firstName: 'Гошо',
    lastName: 'Гошев',
    photo: './images/tonko.jpg',
    number: 53,
    position: 'нападател',
    birthDate: '1997-11-27',
    height: 187,
    weight: 96,
  },
  
]


const TeamHolder = () => {
  const styles = useStyles();

  const [showSwitches, setShowSwitches] = useState(false);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container className={styles.main}>
      <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
        <div className={styles.topDiv}>
          <BrowserView className={styles.switchHolder}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} color='primary' name='checkedA' size='small'/>}
                className={styles.switch}
                label='вратари'
              />
              <FormControlLabel
                control={<Switch checked={state.checkedB} onChange={handleChange} color='primary' name='checkedB' size='small'/>}
                label='защитници'
                className={styles.switch}
              />
              <FormControlLabel
                control={<Switch checked={state.checkedC} onChange={handleChange} color='primary'  name='checkedC' size='small'/>}
                label='нападатели'
                className={styles.switch}
              />
            </FormGroup>
          </BrowserView>
          <MobileView>
            <IconButton size='small' onClick={() => setShowSwitches(!showSwitches)}>
              <TuneIcon color='primary'/>
            </IconButton>
            
          </MobileView>
          <Typography variant={isBrowser ? 'h4' : 'h5'}>Състав</Typography>
        </div>
        <div style={{position: 'relative'}}>
          <div className={styles.mobileSwitches} style={{display: showSwitches ? 'flex' : 'none'}} onClick={(e) => e.preventDefault()}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} color='primary' name='checkedA' size='small'/>}
                className={styles.switch}
                label='вратари'
              />
              <FormControlLabel
                control={<Switch checked={state.checkedB} onChange={handleChange} color='primary' name='checkedB' size='small'/>}
                label='защитници'
                className={styles.switch}
              />
              <FormControlLabel
                control={<Switch checked={state.checkedC} onChange={handleChange} color='primary'  name='checkedC' size='small'/>}
                label='нападатели'
                className={styles.switch}
              />
            </FormGroup>
          </div>
        </div>
        <Typography variant={isBrowser ? 'h5' : 'h6'}>ВРАТАРИ</Typography>
        <Divider/>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', marginLeft: -10, marginRight: isBrowser ? -10 : 10 }}>
          {
            tempPlayers.map(player => <PlayerBox key={player.id} playerData={player}/>)
          }
        </div>
      </Paper>
    </Container>
  )
}

export default TeamHolder;
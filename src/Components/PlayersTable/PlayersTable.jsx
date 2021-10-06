import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { getAllPlayers } from '../../requests/players';
import { useStyles } from './PlayersTable.styles';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {Button} from "@material-ui/core";

const PlayersTable = () => {
  const styles = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getAllPlayers().then(result => {
      setRows(result);
    }).catch (e => console.log (e.message))
  }, [])
  
  if (!rows.length) {
    return <div>WAIT</div>
  }

  return (
    <>
      <div className={styles.floatDiv}>        
        <Button color='primary' variant='contained' size='small' style={{marginLeft: -8}}>Добави</Button>
        <Button color='secondary' variant='contained' size='small' style={{marginLeft: 10}}>изтрий</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center' width='5%'><Checkbox defaultChecked color='error'/></TableCell>
              <TableCell>Име</TableCell>
              <TableCell align="left">Фамилия</TableCell>
              <TableCell align="center">Номер</TableCell>
              <TableCell align="left">Рождена дата</TableCell>
              <TableCell align="left">Ръст</TableCell>
              <TableCell align="left">Тегло</TableCell>
              <TableCell align="right">Пост</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) => 
                <TableRow key={row.playerId}>
                <TableCell align='center'><Checkbox color='error' /></TableCell>
                <TableCell align='left'>{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="left">{new Date(row.birthDate).toLocaleDateString('BG-bg')}</TableCell>
                <TableCell align="left">{row.growth}</TableCell>
                <TableCell align="left">{row.weight}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
              </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PlayersTable
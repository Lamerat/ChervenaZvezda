import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './PlayerBox.styles';

const PlayerBox = ({playerData}) => {
  const styles = useStyles();
  const [showInfo, setShowInfo] = useState(false);

  const {id, number, height, weight, position, photo} = playerData;
  const birthDate = new Date(playerData.birthDate).toLocaleDateString('bg-BG');
  const playerName = `${playerData.firstName} ${playerData.lastName}`;

  const viewProfile = (id) => {
    console.log ('go to ' + id);
  }
  
  return (
    <div className={styles.mainContainer} onClick={() => viewProfile(id)} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
      <div className={styles.number}>{number}</div>
      <div className={styles.shortInfo} style={showInfo ? {bottom: 0, backgroundColor: 'red'} : null}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <div className={styles.playerName} style={{color: showInfo ? 'white' : 'black'}}>{playerName}</div>
          <div className={styles.teamPost} style={{display: showInfo ? 'block' : 'none'}}>{position}</div>
        </div>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHead} padding='none' align='left' width='50%' >РОДЕН</TableCell>
              <TableCell className={styles.tableHead} padding='none' align='center' width='25%' >РЪСТ</TableCell>
              <TableCell className={styles.tableHead} padding='none' align='right' width='25%'>ТЕГЛО</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={styles.tableCell} padding='none' align='left' width='50%'>{birthDate}</TableCell>
              <TableCell className={styles.tableCell} padding='none' align='center' width='50%'>{height}</TableCell>
              <TableCell className={styles.tableCell} padding='none' align='right' width='50%'>{weight}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <img src={photo} alt='player' style={{opacity: showInfo ? 0.5 : 1}} className={styles.mainImage}/>
    </div>
  )
}

export default PlayerBox;
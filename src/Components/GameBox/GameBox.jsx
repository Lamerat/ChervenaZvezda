import React from "react";
import { Container, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useStyles } from "./GameBox.styles";



const iconRedStar = './images/RedStar.png';
const iconNsa = './images/nsa.jpg';
const iconTorpedo = './images/Torpedo.png';

const lastMatch = {
  date: new Date().toLocaleString('fr-CA', {year: 'numeric', month: 'short', day: 'numeric'}),
  home: 'Torpedo',
  homeIcon: iconTorpedo,
  guest: 'Red Star',
  guestIcon: iconRedStar,
  homeScore: 2,
  guestScore: 4,
}

const nextMatch = {
  date: new Date().toLocaleString('fr-CA', {year: 'numeric', month: 'short', day: 'numeric'}),
  home: 'Red Star',
  homeIcon: iconRedStar,
  guest: 'NSA',
  guestIcon: iconNsa,
  homeScore: null,
  guestScore: null,
}


const GameBox = ({type}) => {
  const styles = useStyles();
  const title = type === 'next' ? 'следващ мач' : 'последен мач';
  const data = type === 'next' ? nextMatch : lastMatch;
  
  


  return (
    <Container className={styles.main}>
      <div className={styles.title}>{title}<div className={styles.date}>({data.date})</div></div>
      <div className={styles.body}>
        {/* <div className={styles.date}>{data.date}</div> */}
          <Table>
            <TableBody>
              <TableRow>
                <TableCell width='30%' className={styles.statistic} align='right'><img className={styles.teamLogo} src={data.homeIcon} alt='home'/></TableCell>
                {
                  data.homeScore === null && data.guestScore === null
                  ? <TableCell className={styles.versus} align='center'>VS</TableCell>
                  : (
                      <TableCell className={styles.versus} align='center'>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className={styles.result} align='center' colSpan={3}>{`${data.homeScore} - ${data.guestScore}`}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className={styles.smallCell} align='right'>0-1</TableCell>
                              <TableCell className={styles.smallCell} align='center'>1-1</TableCell>
                              <TableCell className={styles.smallCell} align='left'>1-2</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableCell>
                    )
                }
                <TableCell width='30%' className={styles.statistic} align='left'><img className={styles.teamLogo} src={data.guestIcon} alt='home'/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </div>
    </Container>
  )
}

export default GameBox;

import React from 'react';
import { Container, IconButton, Paper, Typography,FormControl, MenuItem, Select, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { isBrowser } from "react-device-detect";
import { useStyles } from './CalendarMain.styles';
import { tempEvents } from '../../common/tempData';

const teamName = 'Red Star';
const homeColor = '';

const CalendarMain = () => {
  const styles = useStyles();

  const rows = [0, 7, 14, 21, 28, 35];
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const CurrentMount = Array.apply(null, {length: firstDay - 1}).map(x => x = 0);

  for (let i = 1; i <= lastDay; i++) {
    CurrentMount.push(i);
  } 

  while (CurrentMount.length < 35) {
    CurrentMount.push(0);
  }

  const EventCell = ({day, event}) => {
    if (event.event === 'training') {
      return <div className={styles.divInCell} style={{backgroundColor: 'bisque'}}>
        <div className={styles.dayStyle} style={{color: 'black'}}>{day}</div> 
        <div style={{color: 'black'}}>ТРЕНИРОВКА</div>
        <img src='./images/training.png' alt='icon' className={styles.imageInCell} style={{transform: 'scaleX(-1)'}}/>
      </div>
    }

    const matchData = {...event.event};
    const myScore = matchData.home === teamName ? 'home' : 'guest';
    const inFuture = new Date (event.fullDate) > new Date();
    matchData.result = myScore === 'home' ? `${matchData.homeScore} : ${matchData.guestScore}` : `${matchData.guestScore} : ${matchData.homeScore}`
    
    matchData.victory = false;

    if (myScore === 'home' && matchData.homeScore > matchData.guestScore) {
      matchData.victory = true;
    }

    if (myScore !== 'home' && matchData.homeScore < matchData.guestScore) {
      matchData.victory = true;
    }

    if (inFuture) {
      matchData.result = `- : -`;
    }

    return (
      <div
        className={styles.divInCell}
        style={{
          backgroundColor: myScore === 'home' ? null : 'rgb(140,140,140)',
          borderBottom: inFuture ? null : `5px solid ${matchData.victory ? 'red' : 'black'}`,
        }}
      >
        <div className={styles.dayStyle}>{day}</div> 
        <Typography variant='h5'>
          {matchData.result}
        </Typography>
        <img
          src={myScore === 'home' ? matchData.guestIcon : matchData.homeIcon}
          className={styles.imageInCell}
          alt='icon'
        />
        
      </div>
    )
  }

  return (
    <Container className={styles.main}>
      <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
        <div className={styles.topDiv}>
          <FormControl className={styles.yearStyle}>
            <Select
              value={2021}
              // onChange={handleChange}
              disableUnderline
              className={styles.inputYearStyle}
            >
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
            </Select>
          </FormControl>
          <div className={styles.mountSwitch}>
            <IconButton size='small'><ChevronLeftIcon color='primary'/></IconButton>
            <Typography variant='inherit'>септември</Typography>
            <IconButton size='small'><ChevronRightIcon color='primary'/></IconButton>
          </div>
          <Typography variant={isBrowser ? 'h4' : 'h5'} className={styles.title}>Календар</Typography>
        </div>

        <Table className={styles.tableMain}>
          <TableBody>
            {
              rows.map((x, index) => 
                <TableRow key={x}>
                  {
                    CurrentMount.slice(x, rows[index + 1]).map(s => {
                      return (
                        <TableCell
                          align='left'
                          width='4.28571428571429%'
                          height='80px'
                          key={`${Math.random()}`}
                          className={styles.tableStyle}
                          >
                            {
                              !tempEvents.filter(day => day.day === s).length
                              ? s === 0 ? null : <div className={styles.dayStyle}>{s}</div> 
                              : <EventCell day={s} event={tempEvents.filter(day => day.day === s)[0]}/>
                              
                            }
                        </TableCell>
                      )})
                  }
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}

export default CalendarMain;
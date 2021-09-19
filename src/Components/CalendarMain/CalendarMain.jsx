import React from 'react';
import { Container, IconButton, Paper, Typography,FormControl, MenuItem, Select, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { isBrowser, BrowserView, MobileView } from "react-device-detect";
import { useStyles } from './CalendarMain.styles';
import { tempEvents } from '../../common/tempData';

const teamName = 'Red Star';
const homeColor = 'rgb(66, 66, 66)';
const guestColor = 'rgb(140,140,140)';
const trainingColor = 'bisque';
const winColor = 'red';
const loseColor = 'black';

const CalendarMain = () => {
  const styles = useStyles();

  const rows = [0, 7, 14, 21, 28, 35];
  const rowsMobile = [0, 5, 10, 15, 20, 25, 30, 35];
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

  let mobileCurrentMount = [];

  for (let i = 0; i < 7; i++) {
    for(let j = 0; j < 35; j = j + 7) {
      mobileCurrentMount.push(CurrentMount[i+j])
    }
  }


  const EventCell = ({day, event}) => {
    if (event.event === 'training') {
      return <div className={styles.divInCell} style={{backgroundColor: trainingColor}}>
        <div className={styles.dayStyle} style={{color: 'black'}}>{day}</div> 
        <div className={styles.trainingText}>{isBrowser ? 'ТРЕНИРОВКА' : 'ТРЕН.'}</div>
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
          backgroundColor: myScore === 'home' ? homeColor : guestColor,
          borderBottom: inFuture ? null : `${isBrowser ? 5 : 3}px solid ${matchData.victory ? winColor : loseColor}`,
        }}
      >
        <div className={styles.dayStyle}>{day}</div>
        <Typography variant={`${isBrowser ? 'h5' : 'body2'}`} style={{alignSelf: 'center'}}>
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
            <IconButton size='small' ><ChevronLeftIcon color='primary' className={styles.arrow}/></IconButton>
            <Typography variant='inherit'>септември</Typography>
            <IconButton size='small'><ChevronRightIcon color='primary' className={styles.arrow}/></IconButton>
          </div>
          <Typography variant={isBrowser ? 'h4' : 'h5'} className={styles.title}>Календар</Typography>
        </div>
        <BrowserView>
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
          <div className={styles.legendMain}>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: homeColor}}/> ДОМАКИНСТВО </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: guestColor}}/> ГОСТУВАНЕ </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: winColor}}/> ПОБЕДА </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: loseColor}}/> ЗАГУБА </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: trainingColor}}/> ТРЕНИРОВКА </div>
          </div>
        </BrowserView>
          
        <MobileView>
          <Table className={styles.tableMain}>
            <TableBody>
              {
                rowsMobile.map((x, index) => 
                  <TableRow key={x}>
                    {
                      mobileCurrentMount.slice(x, rowsMobile[index + 1]).map(s => {
                        return (
                          <TableCell
                            align='left'
                            width='4.28571428571429%'
                            height='68px'
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
          <div className={styles.legendMain}>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: homeColor}}/> ДОМАКИНСТВО </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: guestColor}}/> ГОСТУВАНЕ </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: winColor}}/> ПОБЕДА </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: loseColor}}/> ЗАГУБА </div>
            <div className={styles.legendDiv}><Brightness1Icon className={styles.legendIcon} style={{color: trainingColor}}/> ТРЕНИРОВКА </div>
          </div>
        </MobileView>

      </Paper>
    </Container>
  )
}

export default CalendarMain;
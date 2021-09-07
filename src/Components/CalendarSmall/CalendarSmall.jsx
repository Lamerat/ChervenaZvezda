import React, { useState } from "react";
import { Container, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useStyles } from "./CalendarSmall.styles";


const tempEvents= [
  {
    day: 5,
    fullDate: '2021-09-05',
    place: 'Пързалка Славия',
    event: {
      home: 'Torpedo',
      homeIcon: './images/Torpedo.png',
      guest: 'Red Star',
      guestIcon: './images/RedStar.png',
      homeScore: 2,
      guestScore: 4,
    }
  },

  {
    day: 8,
    fullDate: '2021-09-08',
    place: 'Зимен дворец',
    event: 'training'
  },

  {
    day: 26,
    fullDate: '2021-09-26',
    place: 'Зимен дворец',
    event: {
      home: 'Torpedo',
      homeIcon: './images/RedStar.png',
      guest: 'Red Star',
      guestIcon: './images/nsa.jpg',
      homeScore: 2,
      guestScore: 4,
    }
  },
];



const NestedEvent = ({id, data, activeDay}) => {
  const styles = useStyles();

  const firstLine = new Date(data[0].fullDate).toLocaleDateString('bg-BG', {month: 'long', year: 'numeric'});
  const secondLine = new Date(data[0].fullDate).toLocaleDateString('bg-BG', {weekday: 'long', hour: 'numeric', minute: 'numeric'}); 

  return (
    <div className={styles.nestedDiv} style={{display: activeDay === id ? 'block' : 'none'}}>
      <div className={styles.nestedTitle}>
        <div className={styles.dayStyle}>{data[0].day}</div>
        <div className={styles.rightSide}>
          <div>{firstLine}</div>
          <div>{secondLine}</div>
        </div>
        <div className={styles.place}>
          {data[0].place}
        </div>
        
      </div>
      
        {
          data[0].event === 'training'
          ? 
            (
              <div className={styles.trainingDiv}>
                <img className={styles.trainingImage} src='./images/training.png' alt='training'/>
                <span className={styles.trainingText}>ТРЕНИРОВКА</span>
                <img className={styles.trainingImage} style={{transform: 'scaleX(-1)'}} src='./images/training.png' alt='training'/>
              </div>
            )
          : (
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell width='30%' className={styles.statistic} align='right'><img className={styles.teamLogo} src={data[0].event.homeIcon} alt='home'/></TableCell>
                  {
                    new Date(data[0].fullDate) > new Date()
                    ? <TableCell className={styles.versus} align='center'>VS</TableCell>
                    : (
                      <TableCell className={styles.versus} align='center'>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className={styles.result} align='center' colSpan={3}>{`${data[0].event.homeScore} - ${data[0].event.guestScore}`}</TableCell>
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
                <TableCell width='30%' className={styles.statistic} align='left'><img className={styles.teamLogo} src={data[0].event.guestIcon} alt='home'/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
            )
        }
        
      
    </div>
  )
}

const CalendarSmall = () => {
  const styles = useStyles();

  const [activeDay, setActiveDay] = useState(null);

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

  return (
    <Container className={styles.main}>
      <div className={styles.title}>{new Date().toLocaleDateString('bg-BG', {month: 'long'})}</div>
      <div className={styles.mainTable}>
      <Table className={styles.tableMain} onMouseLeave={() => setActiveDay(null)}>
        <TableBody>
          {rows.map((x, index) => (
            <TableRow key={x}>
              {
                CurrentMount.slice(x, rows[index + 1]).map(s => {
                  const checkList = tempEvents.filter(z => z.day === s);
                  let style = null;
                  if(checkList.map(r => r = r.day).includes(s)) {
                    if (checkList[0].event === 'training')
                      style = 'training'
                    else
                    style = 'match';
                  }
                  return (<TableCell
                    align='center'
                    style={style ? {backgroundColor: '#424242', cursor: 'pointer'} : null}
                    onMouseEnter={() => setActiveDay(s)}
                    key={`${Math.random()}`}
                    className={styles.tableStyle}
                    width='4.28571428571429%'>
                      {
                        style === 'training'
                        ? <NestedEvent id={s} data={checkList} activeDay={activeDay}/>
                        : null
                      }
                      {
                        style === 'match'
                        ? <NestedEvent id={s} data={checkList} activeDay={activeDay}/>
                        : null
                      }
                      {s === 0 ? null : s}
                  </TableCell>
                )})
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </Container>
  )
}

export default CalendarSmall;

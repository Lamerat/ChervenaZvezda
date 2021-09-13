import React, { useState } from "react";
import { Container, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useStyles } from "./CalendarSmall.styles";
import { isBrowser } from "react-device-detect";
import { tempEvents } from "../../common/tempData";




const NestedEvent = ({id, data, activeDay, xPos}) => {
  const styles = useStyles();
  let leftPos = 0;
  if (xPos !== 0)  {
    leftPos = isBrowser ? 0 : (-xPos.offsetLeft + ((window.innerWidth - 340) / 2))
  } 

  const firstLine = new Date(data[0].fullDate).toLocaleDateString('bg-BG', {month: 'long', year: 'numeric'});
  const secondLine = new Date(data[0].fullDate).toLocaleDateString('bg-BG', {weekday: 'long', hour: 'numeric', minute: 'numeric'}); 

  return (
    <div className={styles.nestedDiv} style={{display: activeDay === id ? 'block' : 'none', left: isBrowser ? 'unset'  : leftPos}}>
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
  const [elementXPos, setElementXPos] = useState(0);

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
                    onMouseEnter={(e) => {setActiveDay(s); setElementXPos(e.currentTarget)}}
                    key={`${Math.random()}`}
                    className={styles.tableStyle}
                    width='4.28571428571429%'>
                      {
                        style === 'training'
                        ? <NestedEvent id={s} data={checkList} activeDay={activeDay} xPos={elementXPos}/>
                        : null
                      }
                      {
                        style === 'match'
                        ? <NestedEvent id={s} data={checkList} activeDay={activeDay} xPos={elementXPos}/>
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

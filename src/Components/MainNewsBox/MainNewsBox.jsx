import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './MainNewsBox.styles';


const MainNewsBox = ({newsData}) => {
  const maxTitle = 73;
  const maxText = newsData.title.length > 39 ?  450 : 550;

  const styles = useStyles();

  const date = new Date(newsData.date);
  const title = newsData.title.slice(0, maxTitle);
  const text = newsData.text.slice(0, maxText);

  return (
    <Paper variant='elevation' elevation={5} className={styles.main}>
      <div className={styles.imageHolder}>
        <div className={styles.dateHolder}>
          <Typography variant='h4' className={styles.dayStyle}>{date.toLocaleDateString('bg-BG', {day: 'numeric'})}</Typography>
          <div className={styles.mountStyle}>
            <Typography variant='inherit'>{date.toLocaleDateString('bg-BG',{month: 'long'})}</Typography>
            <Typography variant='inherit'>{date.toLocaleDateString('bg-BG',{year: 'numeric'})}</Typography>
          </div>
        </div>
        <img src={newsData.photo} alt='hockey' className={styles.imageStyle}/>
      </div>
      <div className={styles.textBox}>
        <Typography variant='h5' className={styles.titleStyle}>
          {title.length < maxTitle ? title : title.slice(0, title.lastIndexOf(' ')) + ' ...'}
        </Typography>
        <Typography variant='body2'>
          {text.length < maxText ? text : text.slice(0, text.lastIndexOf(' ')) + ' ...'}
        </Typography>
      </div>
    </Paper>
  )
}

export default MainNewsBox;

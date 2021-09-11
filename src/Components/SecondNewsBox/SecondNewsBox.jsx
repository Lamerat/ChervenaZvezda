import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './SecondNewsBox.styles';

const SecondNewsBox = ({newsData}) => {
  const styles = useStyles();

  const {photo} = newsData;
  const date = new Date(newsData.date).toLocaleDateString('bg-BG',{day:'numeric', month: 'long', year: 'numeric'});
  const text = newsData.text.slice(0, 180);
  const title = newsData.title.slice(0, 38);
  

  return (
    <div className={styles.main}>
      <img className={styles.imageStyle} src={photo} alt='hockey'/>
      <div className={styles.textBox}>
        <Typography variant='body2' color='primary'>{date}</Typography>

        <Typography style={{marginTop: 8, marginBottom: 8}} variant='h5'>
          {title.length < 38 ? title : title.slice(0, title.lastIndexOf(' ')) + ' ...'}
        </Typography>

        <Typography color='secondary' component='h2' variant='body2'>
          {text.length < 180 ? text : text.slice(0, text.lastIndexOf(' ')) + ' ...'}
        </Typography>
      </div>
    </div>
  )
}

export default SecondNewsBox;
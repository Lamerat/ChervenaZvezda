import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { isBrowser } from 'react-device-detect';
import { useStyles } from './SecondNewsBox.styles';




const SecondNewsBox = ({newsData, size = 'medium'}) => {
  const maxText = size === 'medium' ? 180 : isBrowser ? 100 : 80;
  const maxTitle = size === 'medium' ? 42 : 25;
  
  const styles = useStyles();

  const {photo} = newsData;
  const date = new Date(newsData.date).toLocaleDateString('bg-BG',{day:'numeric', month: 'long', year: 'numeric'});
  const text = newsData.text.slice(0, maxText);
  const title = newsData.title.slice(0, maxTitle);

  return (
    <Paper className={size === 'medium' ? styles.main : styles.mainSmall} variant='elevation' elevation={5}>
      {
        size === 'medium'
        ? <>
            <img className={styles.imageStyle} src={photo} alt='hockey'/>
            <div className={styles.textBox}>
              <Typography variant='body2' color='primary'>{date}</Typography>

              <Typography className={styles.titleStyle} variant='h5'>
                {title.length < maxTitle ? title : title.slice(0, title.lastIndexOf(' ')) + ' ...'}
              </Typography>

              <Typography color='secondary' component='h2' variant='body2'>
                {text.length < maxText ? text : text.slice(0, text.lastIndexOf(' ')) + ' ...'}
              </Typography>
            </div>
          </>
        : <>
            <div className={styles.imageHolder}>
              <img className={styles.smallImage} src={photo} alt='hockey'/>
            </div>
            <div className={styles.smallTextBox}>
              <Typography variant='body2' color='primary'>{date}</Typography>
              <Typography className={styles.smallTitle} variant='h5'>
                {title.length < maxTitle ? title : title.slice(0, title.lastIndexOf(' ')) + ' ...'}
              </Typography>
            </div>
            <div className={styles.smallText}>
              <Typography color='secondary' component='h2' variant='body2'>
                {text.length < maxText ? text : text.slice(0, text.lastIndexOf(' ')) + ' ...'}
              </Typography>
            </div>
          </>
      }
      
      
    </Paper>
  )
}

export default SecondNewsBox;
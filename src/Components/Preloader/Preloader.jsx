import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './Preloader.styles';
const starImage = './images/starAnimate.gif'



const Preloader = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <CircularProgress color='error' size='85px'/>
    </div>
  )
}

export default Preloader;
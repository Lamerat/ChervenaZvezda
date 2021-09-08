import React from "react";
import { useStyles } from "./Banner.styles";


const Banner = ({text, picture, link}) => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.imageBorder}>
        <a href={link} target='_blank' rel='noopener noreferrer'>
        <img className={styles.image} src={picture} alt='bannerImage'/>
        </a>
      </div>
      <div className={styles.textStyle}>
        {text}
      </div>
    </div>
  )
}

export default Banner;
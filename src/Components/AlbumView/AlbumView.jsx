import { Backdrop, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useStyles } from './AlbumView.styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const AlbumView = ({album, closeFunc}) => {
  const styles = useStyles();
  const [exitButton, showExitButton] = useState(false);

  const closeAlbum = (key) => {
    if (key === 'Escape') {
      closeFunc(false);
    }
  }

  return (
    <Backdrop open={true} className={styles.main} invisible={true} onKeyDown={(e) => closeAlbum(e.key)} tabIndex='0'>
      <ImageGallery items={album} lazyLoad={true} onMouseOver={() => showExitButton(true)} onMouseLeave={() => showExitButton(false)}/>
      {
        !exitButton
        ? null
        : 
          (
            <IconButton onMouseEnter={() => showExitButton(true)} className={styles.button} onClick={() => closeFunc(false)}>
              <HighlightOffIcon fontSize='large' />
            </IconButton>
          )
      }
      
    </Backdrop>
  )
}

export default AlbumView;
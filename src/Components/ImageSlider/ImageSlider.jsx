import React, { useState } from 'react';
import Slider from 'react-slick';
import { useStyles } from './ImageSlider.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AlbumView from '../AlbumView/AlbumView';

const lastAlbums = [
  {
    id: 1,
    title: 'Заглавие на албум 1',
    date: '2021-04-01',
    coverImage: './images/temp10.jpg',
  },
  {
    id: 2,
    title: 'Заглавие на албум 2',
    date: '2021-02-03',
    coverImage: './images/temp9.jpg',
  },
  {
    id: 3,
    title: 'Заглавие на албум 3',
    date: '2021-05-02',
    coverImage: './images/temp8.jpg',
  },
  {
    id: 4,
    title: 'Заглавие на албум 4',
    date: '2020-11-10',
    coverImage: './images/temp7.jpg',
  },
  {
    id: 5,
    title: 'Заглавие на албум 5',
    date: '2021-10-30',
    coverImage: './images/temp6.jpg',
  },
  {
    id: 6,
    title: 'Заглавие на албум 6',
    date: '2021-11-1',
    coverImage: './images/temp5.jpg',
  },
  {
    id: 7,
    title: 'Заглавие на албум 7',
    date: '2021-01-03',
    coverImage: './images/temp4.jpg',
  },
  {
    id: 8,
    title: 'Заглавие на албум 8',
    date: '2021-03-03',
    coverImage: './images/temp3.jpg',
  }
]

const images = [
  {
    original: './images/temp3.jpg',
    thumbnail: './images/temp3.jpg',
  },
  {
    original: './images/temp4.jpg',
    thumbnail: './images/temp4.jpg',
  },
  {
    original: './images/temp5.jpg',
    thumbnail: './images/temp5.jpg',
  },
  {
    original: './images/temp6.jpg',
    thumbnail: './images/temp6.jpg',
  },
  {
    original: './images/temp7.jpg',
    thumbnail: './images/temp7.jpg',
  },
  {
    original: './images/temp8.jpg',
    thumbnail: './images/temp8.jpg',
  },
  {
    original: './images/temp9.jpg',
    thumbnail: './images/temp9.jpg',
  },
];



const ImageSlider = () => {
  const styles = useStyles();
  const [showAlbum, setShowAlbum] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [album, setAlbum] = useState(null);

  const imageClick = (id) => {
    setAlbum(id);
    setShowAlbum(true);
  }

  return (
    <>
    <Slider
      className={styles.main}
      dots={false}
      infinite={true}
      slidesToShow={5}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={5000}
      pauseOnDotsHover={false}
      arrows={false}
      touchMove={false}
    >
      {
        lastAlbums.map(x => (
          <div key={x.id} className={styles.container} onMouseEnter={() => setCurrentAlbum(x.id)} onMouseLeave={() => setCurrentAlbum(null)}>
            {
              currentAlbum === x.id
              ? 
                (
                  <div className={styles.overlay} onClick={()=> imageClick(x.id)}>
                    <div>{x.title}</div>
                    <div></div>
                    <div className={styles.albumDate}>{new Date(x.date).toLocaleDateString('bg-BG', {dateStyle: 'long'})}</div>
                  </div>
                )
              : null
            }
            <img className={styles.imageStyle} src={x.coverImage} alt='none'/>
          </div>
        ))
      }
    </Slider>
    {
      showAlbum
      ? <AlbumView album={images} closeFunc={setShowAlbum} />
      : null
    }
    
    </>
  )
}

export default ImageSlider;
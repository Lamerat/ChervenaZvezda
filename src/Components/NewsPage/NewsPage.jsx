import React, { useState } from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { isBrowser } from "react-device-detect";
import { useStyles } from './NewsPage.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';





const NewsPage = () => {
  const styles = useStyles();

  return (
    <Container className={styles.main}>
      <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
        <div className={styles.topDiv}>
          {isBrowser ? <div/> : null}
          <Pagination
            count={10}
            size="small"
            color='primary'
            shape='rounded'className={styles.paginationStyle}
            siblingCount={0}
          />
          <Typography variant={isBrowser ? 'h4' : 'h5'} className={styles.title}>Новини</Typography>
        </div>


        <Card variant='elevation' elevation={5} className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image="./images/temp1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard dasdasasdadasdasdasda dadssddasasd dasdsadasddsa dasdasdd as das
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
   
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>



      </Paper>
    </Container>
  )
}

export default NewsPage;
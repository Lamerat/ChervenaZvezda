import React from "react";
import { useStyles } from "./HomePage.styles";
import { Container, Grid } from '@material-ui/core';
import GameBox from "../GameBox/GameBox";
import NewsBox from "../NewsBox/NewsBox";



const HomePage = () => {
  const styles = useStyles();

  return (
    <Container className={styles.main}>
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <NewsBox/>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <GameBox type='next'/>
            </Grid>
            <Grid item xs={12}>
              <GameBox type='last'/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;
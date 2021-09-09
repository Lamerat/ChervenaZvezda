import React from "react";
import { useStyles } from "./HomePage.styles";
import { Container, Grid } from '@material-ui/core';
import GameBox from "../GameBox/GameBox";
import NewsBox from "../NewsBox/NewsBox";
import CalendarSmall from "../CalendarSmall/CalendarSmall";
import Banner from "../Banner/Banner";
import ImageSlider from "../ImageSlider/ImageSlider";
import { BrowserView, MobileView } from "react-device-detect";


const HomePage = () => {
  const styles = useStyles();

  return (
    <>
      <BrowserView>
        <Container className={styles.main}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <NewsBox/>
                </Grid>
                <Grid item xs={12}>
                  <div className={styles.banners}>
                    <Banner picture='./images/hockeyCamel.jpg' text='някакъв текст максимум на два реда' link='https://hockeycamel.com/'/>
                    <Banner picture='./images/isoStar.jpg' text='някакъв текст'/>
                    <Banner picture='./images/empty.jpg' text='някакъв текст'/>
                    <Banner picture='./images/empty.jpg' text='някакъв текст'/>
                    <Banner picture='./images/empty.jpg' text='някакъв текст dasdas dasdas dsasad  dasdasdasasd  sadadasdas'/>
                  </div>
                </Grid>
              </Grid>  
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <GameBox type='next'/>
                </Grid>
                <Grid item xs={12}>
                  <GameBox type='last'/>
                </Grid>
                <Grid item xs={12}>
                  <CalendarSmall />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ImageSlider/>
            </Grid>
          </Grid>
        </Container>
      </BrowserView>
      <MobileView>
        <div className={styles.mobileMainDiv}>
        <div className={styles.mobileItem}>
            <NewsBox/>
          </div>
          <div className={styles.mobileItem}>
            <GameBox type='next'/>
          </div>
          <div className={styles.mobileItem}>
            <GameBox type='last'/>
          </div>
          <div className={styles.mobileItem}>
            <CalendarSmall />
          </div>
          <div className={styles.mobileItem}>
            <ImageSlider/>
          </div>
          <div className={styles.mobileItem}>
            <div className={styles.banners}>
              <Banner picture='./images/hockeyCamel.jpg' text='някакъв текст максимум на два реда' link='https://hockeycamel.com/'/>
              <Banner picture='./images/isoStar.jpg' text='някакъв текст'/>
            </div>
          </div>
          <div className={styles.mobileItem}>
            <div className={styles.banners}>
              <Banner picture='./images/empty.jpg' text='някакъв текст максимум на два реда' link='https://hockeycamel.com/'/>
              <Banner picture='./images/empty.jpg' text='някакъв текст'/>
            </div>
          </div>
          <div className={styles.mobileItem}>
            <div className={styles.banners} style={{justifyContent: 'center'}}>
              <Banner picture='./images/empty.jpg' text='някакъв текст максимум на два реда' link='https://hockeycamel.com/'/>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  )
}

export default HomePage;
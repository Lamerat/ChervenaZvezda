import React, { useState } from 'react';
import { Container, Paper, Typography, Fab, IconButton, Button } from '@material-ui/core';
import {BrowserView, isBrowser, MobileView } from 'react-device-detect';
import { useStyles } from './NewsPage.styles';
import Pagination from '@material-ui/lab/Pagination';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DateFnsUtils from '@date-io/date-fns';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SecondNewsBox from '../SecondNewsBox/SecondNewsBox';
import MainNewsBox from '../MainNewsBox/MainNewsBox';

const today = new Date();

const NewsPage = () => {
  const styles = useStyles();
  const [showFilters, setShowFilters] = useState(false);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);


  const tempNews = [
    {
      id: 1,
      date: '2021-01-12',
      title: 'Някакво заглавие',
      text: `Международната федерация по хокей на лед (IIHF) обяви, че хокеистите от НХЛ ще участват на олимпийските игри в Пекин през периода 4-20 февруари 2022 г. Изглежда е постигната договореност между IIHF, НХЛ и профсъюзът на играчите в НХЛ. Както е известно, звездите от Лигата участваха на олимпийските игри от 1998 до 2014 г., но управата на НХЛ отказа да пусне играчите за Олимпиадата в Пьончан през 2018 г. НХЛ от своя страна обяви, че си запазва правото да не допусне участие на играчите от Лигата на олимпийските игри в Пекин, ако ситуацията с разпространените на COVID-19 се влоши. 
      „Знам, че мога да говоря от името на всички хокейни фенове в света и с удоволствие да приветстваме решението за връщането на най-добрите хокеисти на олимпийските игри. Проведохме много конструктивни дебати. Положихме много усилия, за да приключат успешно. Искам да благодаря на всички заинтересувани страни за подкрепата“, заяви президентът на IIHF Рене Фазел.
      „Много добре разбираме с каква страст играчите от НХЛ жадуват да представят своите държави на олимпийските игри. Много се радваме, че успяхме да постигнем споразумение, което ще позволи отново да видим битките на най-добрите в света на олимпийско равнище“, заяви заместник-комисионерът на НХЛ Бил Дейли.`,
      photo: './images/temp1.jpg',
    },
    {
      id: 2,
      date: '2021-10-12',
      title: 'Пак Някакво заглавие',
      text: `Международната федерация по хокей на лед (IIHF) обяви, че хокеистите от НХЛ ще участват на олимпийските игри в Пекин през периода 4-20 февруари 2022 г. Изглежда е постигната договореност между IIHF, НХЛ и профсъюзът на играчите в НХЛ. Както е известно, звездите от Лигата участваха на олимпийските игри от 1998 до 2014 г., но управата на НХЛ отказа да пусне играчите за Олимпиадата в Пьончан през 2018 г. НХЛ от своя страна обяви, че си запазва правото да не допусне участие на играчите от Лигата на олимпийските игри в Пекин, ако ситуацията с разпространените на COVID-19 се влоши. 
      „Знам, че мога да говоря от името на всички хокейни фенове в света и с удоволствие да приветстваме решението за връщането на най-добрите хокеисти на олимпийските игри. Проведохме много конструктивни дебати. Положихме много усилия, за да приключат успешно. Искам да благодаря на всички заинтересувани страни за подкрепата“, заяви президентът на IIHF Рене Фазел.
      „Много добре разбираме с каква страст играчите от НХЛ жадуват да представят своите държави на олимпийските игри. Много се радваме, че успяхме да постигнем споразумение, което ще позволи отново да видим битките на най-добрите в света на олимпийско равнище“, заяви заместник-комисионерът на НХЛ Бил Дейли.`,
      photo: './images/temp2.jpg',
    },
    {
      id: 3,
      date: '2021-11-15',
      title: 'Още Някакво заглавие, но този път да мине на два реда',
      text: 'Нищо особено днес',
      photo: './images/temp3.jpg',
    },
    {
      id: 4,
      date: '2021-09-16',
      title: 'Отново Някакво заглавие',
      text: 'Нищо особено днес',
      photo: './images/temp4.jpg',
    },
    {
      id: 5,
      date: '2021-12-20',
      title: 'Какво да е заглавие',
      text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
      photo: './images/temp5.jpg',
    },
    {
      id: 6,
      date: '2021-12-20',
      title: 'Какво да е заглавие',
      text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
      photo: './images/temp6.jpg',
    },
    {
      id: 7,
      date: '2021-12-20',
      title: 'Още Някакво заглавие, но този път да мине на два реда',
      text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
      photo: './images/temp7.jpg',
    },
    {
      id: 8,
      date: '2021-12-20',
      title: 'Какво да е заглавие',
      text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
      photo: './images/temp8.jpg',
    },
    {
      id: 9,
      date: '2021-12-20',
      title: 'Какво да е заглавие',
      text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
      photo: './images/temp9.jpg',
    },
    {
      id: 10,
      date: '2021-12-20',
      title: 'Какво да е заглавие стига да е дълго',
      text: `Ръководството на НХЛ ще вземе решение за участието на играчите от Лигата на олимпийските игри в Пекин 2022 през тази седмица. Това обяви на профила си в социалните мрежи журналистът Джон Шенън, който е известен с връзките си сред хокейните среди в Северна Америка. За момента няма изявено предимство относно това дали НХЛ да пусне или да не пусне играчите си на Олимпиадата`,
      photo: './images/temp10.jpg',
    }
  ]

  const applyFilters = () => {
    setShowFilters(false);
  }

  return (
    <Container className={styles.main}>
      <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
        <div className={styles.topDiv}>
          {
            !isBrowser
              ? null
              : (
                <IconButton className={styles.dateButton} size='small' color='primary' onClick={() => setShowFilters(!showFilters)}>
                  <DateRangeIcon style={{fontSize: '1.8rem'}}/>
                </IconButton>
                )
          }
          <Pagination
            count={15}
            size='small'
            color='primary'
            shape='rounded'className={styles.paginationStyle}
            siblingCount={isBrowser ? 2 : 0}
            boundaryCount={isBrowser ? 3 : 1}
          />
          <Typography variant={isBrowser ? 'h4' : 'h5'} className={styles.title}>Новини</Typography>
        </div>
        {
          isBrowser
          ? null
          : (
            <Fab size='small' color='primary' aria-label='add' className={styles.floatButton} onClick={() => setShowFilters(!showFilters)}>
              <DateRangeIcon />
            </Fab>
            )
        }
        {
          !showFilters
          ? null
          : (
              <div style={{position: 'relative'}}>
                <div className={styles.dateFilters}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      color='secondary'
                      disableToolbar
                      variant='inline'
                      format='MM/dd/yyyy'
                      margin='dense'
                      label='Начална дата'
                      value={startDate}
                      onChange={(date) => setStartDate(date)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardDatePicker
                      fullWidth
                      color='secondary'
                      disableToolbar
                      variant='inline'
                      format='MM/dd/yyyy'
                      margin='dense'
                      label='Крайна дата'
                      value={endDate}
                      onChange={(date) => setEndDate(date)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      style={{marginTop: 20, marginBottom: 20}}
                    />
                  </MuiPickersUtilsProvider>
                  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Button color='primary' variant='contained' startIcon={<DoneIcon/>} onClick={applyFilters}>apply</Button>
                    <Button color='secondary' variant='contained' startIcon={<ClearIcon/>} onClick={() => setShowFilters(false)}>cancel</Button>
                  </div>
                </div>
              </div>
            )
        }
        <BrowserView>
          <div className={styles.topNewsHolder}>
            <MainNewsBox newsData={tempNews[0]}/>
            <div className={styles.secondNews}>
              <SecondNewsBox newsData={tempNews[1]}/>
              <SecondNewsBox newsData={tempNews[2]}/>
              <SecondNewsBox newsData={tempNews[3]}/>
            </div>
          </div>
          <div className={styles.allNewsHolder}>
            <SecondNewsBox newsData={tempNews[4]} size='small'/>
            <SecondNewsBox newsData={tempNews[2]} size='small'/>
            <SecondNewsBox newsData={tempNews[6]} size='small'/>
            <SecondNewsBox newsData={tempNews[7]} size='small'/>
            <SecondNewsBox newsData={tempNews[8]} size='small'/>
            <SecondNewsBox newsData={tempNews[9]} size='small'/>
          </div>
        </BrowserView>
        <MobileView>
          <MainNewsBox newsData={tempNews[0]}/>
          { tempNews.slice(1).map(news => <SecondNewsBox key={news.id} newsData={news} size='small'/>) }
        </MobileView>
      </Paper>
    </Container>
  )
}

export default NewsPage;
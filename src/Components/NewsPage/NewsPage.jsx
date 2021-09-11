import React, { useState } from 'react';
import { Container, Paper, Typography, Fab, IconButton, Button } from '@material-ui/core';
import {isBrowser } from 'react-device-detect';
import { useStyles } from './NewsPage.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/lab/Pagination';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DateFnsUtils from '@date-io/date-fns';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const today = new Date();

const NewsPage = () => {
  const styles = useStyles();
  const [showFilters, setShowFilters] = useState(false);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);


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
        

        <Card variant='elevation' elevation={5} className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image='./images/temp1.jpg'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Title
          </Typography>
          <Typography variant='body2' color='secondary' component='p'>
          Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.



          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>



      </Paper>
    </Container>
  )
}

export default NewsPage;
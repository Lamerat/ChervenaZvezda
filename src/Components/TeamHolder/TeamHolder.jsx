import React, { useState } from 'react';
import { Container, Divider, Paper, Typography, IconButton, Collapse } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { isBrowser } from 'react-device-detect';
import { useStyles } from './TeamHolder.styles';
import PlayerBox from '../PlayerBox/PlayerBox';
import { BrowserView, MobileView } from "react-device-detect";
import TuneIcon from '@material-ui/icons/Tune';


const tempPlayers = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    photo: './images/moni1.jpg',
    number: 13,
    position: 'вратар',
    birthDate: '1993-05-12',
    height: 180,
    weight: 91,
  },
  {
    id: 2,
    firstName: 'Васил',
    lastName: 'Василев',
    photo: './images/kiki1.jpg',
    number: 8,
    position: 'Защитник',
    birthDate: '1992-03-11',
    height: 177,
    weight: 87,
  },
  {
    id: 3,
    firstName: 'Гошо',
    lastName: 'Гошев',
    photo: './images/tonko.jpg',
    number: 53,
    position: 'нападател',
    birthDate: '1997-11-27',
    height: 187,
    weight: 96,
  },
  
]

const filterPrototype = {
  goalies: true,
  guards: true,
  attackers: true,
}


const TeamHolder = () => {
  const styles = useStyles();

  const [showSwitches, setShowSwitches] = useState(false);

  const [state, setState] = useState(filterPrototype);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const mobileSwitch = (event) => {
    console.log (event.target.name)
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  };

  return (
    <Container className={styles.main}>
      <Paper variant='elevation' elevation={5} className={styles.paperStyle}>
        <div className={styles.topDiv}>
          <BrowserView className={styles.switchHolder}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={state.goalies} onChange={handleChange} color='primary' name='goalies' size='small'/>}
                className={styles.switch}
                label='вратари'
              />
              <FormControlLabel
                control={<Switch checked={state.guards} onChange={handleChange} color='primary' name='guards' size='small'/>}
                label='защитници'
                className={styles.switch}
              />
              <FormControlLabel
                control={<Switch checked={state.attackers} onChange={handleChange} color='primary'  name='attackers' size='small'/>}
                label='нападатели'
                className={styles.switch}
              />
            </FormGroup>
          </BrowserView>
          <MobileView>
            <IconButton size='small' onClick={() => setShowSwitches(!showSwitches)}>
              <TuneIcon color='primary'/>
            </IconButton>
          </MobileView>
          <Typography variant={isBrowser ? 'h4' : 'h5'}>Състав</Typography>
        </div>
        <div style={{position: 'relative'}}>
          <div className={styles.mobileSwitches} style={{display: showSwitches ? 'flex' : 'none'}} onClick={(e) => e.preventDefault()}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={state.goalies} onClick={mobileSwitch} color='primary' name='goalies' size='small'/>}
                className={styles.switch}
                label='вратари'
              />
              <FormControlLabel
                control={<Switch checked={state.guards} onClick={mobileSwitch} color='primary' name='guards' size='small'/>}
                label='защитници'
                className={styles.switch}
              />
              <FormControlLabel
                control={<Switch checked={state.attackers} onClick={mobileSwitch} color='primary'  name='attackers' size='small'/>}
                label='нападатели'
                className={styles.switch}
              />
            </FormGroup>
          </div>
        </div>

        <Collapse in={state.goalies} timeout='auto' unmountOnExit style={{marginTop: 20}}>
          <Typography className={styles.sectionStyle} variant={isBrowser ? 'h5' : 'h6'}>ВРАТАРИ</Typography>
          <Divider className={styles.dividerStyle}/>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', marginLeft: -10, marginRight: isBrowser ? -10 : 10 }}>
            {tempPlayers.map(player => <PlayerBox key={player.id} playerData={player}/>)}
          </div>
        </Collapse>

        

        <Collapse in={state.guards} timeout='auto' unmountOnExit style={{marginTop: 20}}>
          <Typography className={styles.sectionStyle} variant={isBrowser ? 'h5' : 'h6'}>ЗАЩИТНИЦИ</Typography>
          <Divider className={styles.dividerStyle}/>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', marginLeft: -10, marginRight: isBrowser ? -10 : 10 }}>
            {tempPlayers.map(player => <PlayerBox key={player.id} playerData={player}/>)}
          </div>
        </Collapse>

        

        <Collapse in={state.attackers} timeout='auto' unmountOnExit style={{marginTop: 20}}>
          <Typography className={styles.sectionStyle} variant={isBrowser ? 'h5' : 'h6'}>НАПАДАТЕЛИ</Typography>
          <Divider className={styles.dividerStyle}/>
          <div className={styles.playersHolder}>
            {tempPlayers.map(player => <PlayerBox key={player.id} playerData={player}/>)}
          </div>
        </Collapse>
      </Paper>
    </Container>
  )
}

export default TeamHolder;
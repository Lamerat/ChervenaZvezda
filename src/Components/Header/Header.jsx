import React, { useState, useContext } from "react";
import { Container, Button, IconButton, Divider } from "@material-ui/core";
import PlayersFilterContext from "../../contexts/PlayersFilterContext";
import MainMenu from "../MainMenu/MainMenu";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from "./Header.styles";
import { BrowserView, MobileView } from "react-device-detect";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router";

const logo = './images/Logo.svg';

const Header = () => {
  const styles = useStyles();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState({club: false, team: false});

  const {setPlayersFilter} = useContext(PlayersFilterContext);

  const openSubMenu = (name) => {
    setOpen({...open, [name]: !open[name]});
  };

  const goToAddress = (address) => {
    setShowMenu(false);
    setOpen({club: false, team: false});
    history.push(address);
  }

  const goToTeamPage = (playerPosition) => {
    switch (playerPosition) {
      case 'goalies':
        setPlayersFilter({
          goalies: true,
          guards: false,
          attackers: false,
        })
        break;
      case 'guards':
        setPlayersFilter({
          goalies: false,
          guards: true,
          attackers: false,
        })
        break;
      case 'attackers':
        setPlayersFilter({
          goalies: false,
          guards: false,
          attackers: true,
        })
        break;
      default:
        break;
    }
    goToAddress('/team')
  }

  return (
    <>
    <BrowserView>
      <Container className={styles.main}>
        <div className={styles.logoContainer}>
          <img src={logo} alt='logo' className={styles.logoImage} onClick={() => history.push('/')}/>
        </div>
        <div className={styles.rightHolder}>
          <div className={styles.overMenu}>
            <div className={styles.redStar}>RED STAR - Sofia</div>
            <div className={styles.buttonSide}>
              <div className={styles.topButtonsLine}>
                <IconButton className={styles.iconButton} onClick={() => window.open('https://www.facebook.com/redstarsofia', '_blank').focus()}><FacebookIcon/></IconButton>
                <IconButton className={styles.iconButton}><InstagramIcon/></IconButton>
                <IconButton className={styles.iconButton}><GitHubIcon/></IconButton>
              </div>
              <div className={styles.downButtonsLine}>
                <Button size='small' color='primary' className={styles.langButton} style={{marginRight: 10}} variant='contained'>????</Button>
                <Button size='small' color='secondary' className={styles.langButtonBlack} variant='contained'>en</Button>
              </div>
            </div>
          </div>
          <MainMenu/>
        </div>
      </Container>
    </BrowserView>
    <MobileView>
      <div style={{display: 'flex', justifyContent: 'flex-start', minHeight: 75}}>
        <div className={styles.logoContainer}>
          <img src={logo} alt='logo' className={styles.logoImage} onClick={() => history.push('/')}/>
        </div>
        <div className={styles.rightHolder}>
          <div className={styles.overMenu}>
            <div className={styles.redStar}>RED STAR - Sofia</div>
          </div>
          <div className={styles.mobileMenu}>
            <div className={styles.endPart}>
              <div className={styles.search}>
                <div className={styles.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="??????????..."
                  classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <IconButton size='small' style={{padding: 0}} onClick={() => setShowMenu(!showMenu)}>
              <MenuIcon fontSize='small' style={{color: 'white', padding: 0}}/>
            </IconButton>
            <div className={styles.dropDown} style={{display: showMenu ? 'block' : 'none'}}>
              <List component="nav" className={styles.root}>
                <ListItem button onClick={() => goToAddress('/')}>
                  <ListItemText primary="????????????" />
                </ListItem>
                <Divider variant='middle'/>
                <ListItem button onClick={() => openSubMenu('club')}>
                  <ListItemText primary="????????" />
                  {open.club ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.club} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={styles.listNested} onClick={() => goToAddress('/club')}>
                      <ListItemIcon style={{minWidth: 5}}/>
                      <ListItemText primary="??????????????" />
                    </ListItem>
                    <ListItem button className={styles.listNested}>
                      <ListItemIcon style={{minWidth: 5}}/>
                      <ListItemText primary="????????????????" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant='middle'/>
                <ListItem button>
                  <ListItemText primary="????????????" onClick={() => goToAddress('/news')}/>
                </ListItem>
                <Divider variant='middle'/>
                <ListItem button onClick={() => openSubMenu('team')}>
                  <ListItemText primary="??????????" />
                  {open.team ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.team} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={styles.listNested} onClick={() => goToTeamPage('goalies')}>
                      <ListItemIcon style={{minWidth: 5}}/>
                      <ListItemText primary="??????????????" />
                    </ListItem>
                    <ListItem button className={styles.listNested} onClick={() => goToTeamPage('guards')}>
                      <ListItemIcon style={{minWidth: 5}}/>
                      <ListItemText primary="??????????????????" />
                    </ListItem>
                    <ListItem button className={styles.listNested} onClick={() => goToTeamPage('attackers')}>
                      <ListItemIcon style={{minWidth: 5}}/>
                      <ListItemText primary="????????????????????" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider variant='middle'/>
                <ListItem button>
                  <ListItemText primary="??????????" />
                </ListItem>
                <Divider variant='middle'/>
                <ListItem button onClick={() => goToAddress('/calendar')}>
                  <ListItemText primary="????????????????" />
                </ListItem>
                <Divider variant='middle'/>
                <ListItem button>
                  <ListItemText primary="??????????????" />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </MobileView>
    </>
  )
}

export default Header;
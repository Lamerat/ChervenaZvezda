import React, { useContext, useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from "./MainMenu.styles";
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router";
import PlayersFilterContext from "../../contexts/PlayersFilterContext";


const MainMenu = () => {
  const [hoverButton, setHoverButton] = useState(null);
  const {setPlayersFilter} = useContext(PlayersFilterContext);

  const history = useHistory();
  const styles = useStyles();

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
    history.push('/team')
  }

  return (
    <div className={styles.main} onMouseLeave={() => setHoverButton(null)}>
      <div className={styles.button} onMouseEnter={() => setHoverButton(1)} onClick={() => history.push('/')}>НАЧАЛО</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(2)}>
        КЛУБ
        <div className={styles.dropDown} style={hoverButton === 2 ? {display: 'block'} : {display: 'none'}}>
          <div className={styles.menuItem} onClick={() => history.push('/club')}>ИСТОРИЯ</div>
          <Divider variant='middle'/>
          <div className={styles.menuItem}>КОНТАКТИ</div>
        </div>
      </div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(3)} onClick={() => history.push('/news')}>НОВИНИ</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(4)}>
        ОТБОР
        <div className={styles.dropDown} style={hoverButton === 4 ? {display: 'block'} : {display: 'none'}}>
          <div className={styles.menuItem} onClick={() => goToTeamPage('goalies')}>ВРАТАРИ</div>
          <Divider variant='middle'/>
          <div className={styles.menuItem} onClick={() => goToTeamPage('guards')}>ЗАЩИТНИЦИ</div>
          <Divider variant='middle'/>
          <div className={styles.menuItem} onClick={() => goToTeamPage('attackers')}>НАПАДАТЕЛИ</div>
        </div>
      </div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(5)}>МЕДИЯ</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(6)} onClick={() => history.push('/calendar')}>КАЛЕНДАР</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(7)}>МАГАЗИН</div>
      <div className={styles.endPart}>
        <div className={styles.search}>
        <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Търси..."
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          </div>
          
        </div>
    </div>
  )
}

export default MainMenu;
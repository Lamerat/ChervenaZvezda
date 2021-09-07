import React, { useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from "./MainMenu.styles";
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router";



const MainMenu = () => {
  const [hoverButton, setHoverButton] = useState(null);
  const history = useHistory();

  const styles = useStyles();

  return (
    <div className={styles.main} onMouseLeave={() => setHoverButton(null)}>
      <div className={styles.button} onMouseEnter={() => setHoverButton(1)} onClick={() => history.push('/ChervenaZvezda/')}>НАЧАЛО</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(2)} onClick={() => history.push('/ChervenaZvezda/club')}>
        КЛУБ
        <div className={styles.dropDown} style={hoverButton === 2 ? {display: 'block'} : {display: 'none'}}>
          <div className={styles.menuItem} >ИСТОРИЯ</div>
          <Divider variant='middle'/>
          <div className={styles.menuItem}>КОНТАКТИ</div>
        </div>
      </div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(3)}>НОВИНИ</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(4)}>
        ОТБОР
        <div className={styles.dropDown} style={hoverButton === 4 ? {display: 'block'} : {display: 'none'}}>
          <div className={styles.menuItem}>ВРАТАРИ</div>
          <Divider variant='middle'/>
          <div className={styles.menuItem}>ЗАЩИТНИЦИ</div>
          <Divider variant='middle'/>
          <div className={styles.menuItem}>НАПАДАТЕЛИ</div>
        </div>
      </div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(5)}>МЕДИЯ</div>
      <div className={styles.separator}/>
      <div className={styles.button} onMouseEnter={() => setHoverButton(6)}>КАЛЕНДАР</div>
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
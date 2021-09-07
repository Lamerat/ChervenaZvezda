import { Container, Button, IconButton } from "@material-ui/core";
import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useStyles } from "./Header.styles";


const logo = '/images/Logo.svg';


const Header = () => {
  const styles = useStyles();

  return (
    <>
    <Container className={styles.main}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo' className={styles.logoImage}/>
      </div>

      
      <div className={styles.rightHolder}>
        <div className={styles.overMenu}>
          <div className={styles.redStar}>RED STAR - Sofia</div>
          <div className={styles.buttonSide}>

            <div className={styles.topButtonsLine}>
              <IconButton className={styles.iconButton}><FacebookIcon/></IconButton>
              <IconButton className={styles.iconButton}><InstagramIcon/></IconButton>
              <IconButton className={styles.iconButton}><GitHubIcon/></IconButton>
            </div>

            <div className={styles.downButtonsLine}>
              <Button size='small' color='primary' className={styles.langButton} style={{marginRight: 10}} variant='contained'>бг</Button>
              <Button size='small' color='secondary' className={styles.langButtonBlack} variant='contained'>en</Button>
            </div>
          </div>
        </div>
        <MainMenu/>
      </div>
    </Container>
    </>
  )
}

export default Header;
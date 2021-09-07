import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    height: 160,
    display: 'flex',
    justifyContent: 'flex-start'
  },

  logoContainer: {
    padding: 0,
    paddingTop: 32,
    margin: 0,
    width: 200,
    height: 200,
    zIndex:100,
  },

  logoImage: {
    width: 200,
    filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.6))'
  },

  rightHolder: {
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
  },

  overMenu: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  redStar: {
    padding: 0,
    margin:0,
    fontFamily: 'Dusha',
    color: 'white',
    fontSize: '4.5em',
    textShadow: '3px 3px 3px black',
    display: 'flex',
    alignItems: 'flex-end',
    lineHeight: 1.2
  },

  buttonSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  topButtonsLine: {
    padding: '10px 0px 5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
  },

  downButtonsLine: {
    marginBottom: 8,
    padding: '10px 0px 10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  iconButton: {
    color: 'white',
    padding: 6,
  },

  langButton: {
    minWidth: 30,
    padding: 0,
  },

  langButtonBlack: {
    minWidth: 30,
    padding: 0,
    backgroundColor: theme.palette.secondary[900]
  }


}));

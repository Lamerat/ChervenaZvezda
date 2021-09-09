import { makeStyles, alpha } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";


export const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    height: 160,
    display: 'flex',
    justifyContent: 'flex-start'
  },

  logoContainer: {
    padding: isBrowser ? 0 : 8,
    paddingTop: isBrowser ? 32 : 12,
    margin: 0,
    width: isBrowser ? 200 : 110,
    height: isBrowser ? 200 : 50,
    zIndex: 100,
  },

  logoImage: {
    width: isBrowser ? 200 : 100,
    filter: 'drop-shadow(5px 5px 5px rgb(0 0 0 / 0.6))'
  },

  rightHolder: {
    marginLeft: isBrowser ? 30 : 8,
    marginRight: isBrowser ? 0 : 8,
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
    fontSize: isBrowser ? '4.5em' : '2.2em',
    textShadow: isBrowser ? '3px 3px 3px black' : '2px 2px 2px black',
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
  },

  mobileMenu: {
    backgroundColor: 'red',
    width: '100%',
    maxHeight: 35,
    minHeight: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    boxShadow: '2px 2px 2px black',
    color: 'white',
    position: 'relative'
  },
  
  smallButton: {
    maxHeight: 30,
  },

  search: {
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary[900], 1),
    },
    marginLeft: 28,
    width: '82%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: -30,
  },

  inputRoot: {
    color: 'inherit',
  },

  dropDown: {
    position: 'absolute',
    backgroundColor: '#b2b2b2',
    color: '#666666',
    top: 35,
    right: 0,
    width: '100%',
    boxShadow: '2px 2px 2px black',
    zIndex: 10,
  },

  listRoot: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  listNested: {
    paddingLeft: theme.spacing(3),
  },
}));

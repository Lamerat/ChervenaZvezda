import { makeStyles, alpha } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: isBrowser ? '310px' : '440px',
    maxWidth: '232px',
    minWidth: isBrowser ? '232px' : '100%',
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    boxShadow: isBrowser ? '2px 2px 2px black' : '1.5px 1.5px 1.5px black',
    objectFit: 'crop',
    overflow: 'hidden',
    position: 'relative',
    margin: 10,
    cursor: 'pointer',
  },

  mainImage: {
    maxWidth: '100%',
    position: 'absolute',
    transition: '0.5s',
  },

  number: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'red',
    zIndex: 2,
    right: 0,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    textShadow: isBrowser ? '2px 2px 2px black' : '1px 1px 2px black',
    letterSpacing: 1.1,
  },

  shortInfo: {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    padding: 10,
    bottom: -80,
    width: '100%',
    minHeight: 120,
    zIndex: 1,
    display: 'grid',
    gridTemplateRows: '50% 50%',
    gridTemplateColumns: '100%',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: '0.5s',
  },

  playerName: {
    fontSize: '1.0rem',
  },

  teamPost: {
    fontWeight: 'normal',
    color: 'white',
    lineHeight: 1,
    fontSize: '0.75rem',
  },

  tableHead: {
    color: 'darkRed',
    borderBottom: '1px solid darkRed',
    fontSize: '0.8rem',
  },

  tableCell: {
    color: theme.palette.common.white,
    fontSize: '0.8rem',
    fontWeight: '500',
    border: 0,
  },
}));

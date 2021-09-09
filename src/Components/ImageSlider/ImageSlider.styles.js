import { makeStyles, alpha } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";


export const useStyles = makeStyles((theme) => ({
  main: {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    boxShadow: isBrowser ? '2px 2px 2px black' : '1px 1px 1px black',
    height: isBrowser ? 132 : 78,
    backgroundColor: 'black',
  },

  container: {
    position: 'relative',
    maxHeight:  isBrowser ? 131 : 77,
    height: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: '1px 0.5px 1px 0.5px',
  },

  overlay: {
    cursor: 'pointer',
    position: 'absolute',
    color: 'black',
    padding: 10,
    backgroundColor: alpha(theme.palette.common.white, 0.6),
    minWidth: '100%',
    minHeight: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '25% 50% 25%',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  albumDate: {
    color: theme.palette.primary.main,
    textAlign: 'right',
  },

  imageStyle: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }
}));

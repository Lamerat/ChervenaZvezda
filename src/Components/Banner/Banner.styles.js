import { makeStyles } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";

export const useStyles = makeStyles((theme) => ({
  main: {
    minWidth: isBrowser ? '18%' : '48%',
    maxWidth: isBrowser ? '18%' : '48%',
    padding: 0,
    maxHeight: 100,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: '0.75rem',
    textAlign: 'center',
    overflow: 'hidden',
    maxHeight: 30
  }, 

  imageBorder: {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    padding: 0,
    width: '100%',
    height: 60,
    maxHeight: 60,
    boxShadow: isBrowser ? '2px 2px 2px black' : '1.5px 1.5px 1.5px black',
    marginBottom: 10,
  },

  image: {
    objectFit: 'cover',
    width: '100%',  
    height: '100%',
  }
}));

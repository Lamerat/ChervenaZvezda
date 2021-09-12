import { makeStyles, alpha } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  main: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
  },

  imageHolder: {
    maxHeight: '50%',
    minHeight: '50%',
    overflow: 'hidden',
    position: 'relative',
  },

  imageStyle: {
    maxWidth: '100%',
  },

  textBox: {
    maxHeight: '50%',
    overflow: 'hidden',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',

  },

  titleStyle: {
    paddingBottom: 8,
  },

  dateHolder: {
    position: 'absolute',
    left: 0,
    color: 'white',
    display: 'flex',
    minHeight: 50,
    maxHeight: 50,
  },

  dayStyle: {
    backgroundColor: alpha('#FF0000', 0.7),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    padding: '10px 10px 10px 10px',
    
  },

  mountStyle: {
    backgroundColor: alpha('#FF0000', 0.4),
    padding: '10px 10px 10px 10px',
    display: 'flex',
    fontSize: '0.75rem',
    flexDirection: 'column',
    justifyContent: 'center',
  }

}));

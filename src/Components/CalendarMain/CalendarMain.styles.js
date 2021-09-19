import { makeStyles } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";


export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: isBrowser ? 40 : 20,
    padding: 0,
  },

  paperStyle: {
    padding: isBrowser ? 20 : 10,
    borderRadius: 0,
    margin: isBrowser ? 0 : 8,
    marginBottom: isBrowser ? 50 : 8,
  },

  topDiv: {
    maxWidth: '100%',
    paddingBottom: isBrowser ? 4 : 1,
    borderBottom: `2px solid ${theme.palette.primary[200]}`,
    marginBottom: 20,
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: isBrowser ? '40% auto 40%' : 'auto auto auto',
    color: 'red',
  },

  title: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'red',
    
  },

  mountSwitch: {
    display: 'flex',
    justifyContent: isBrowser ? 'space-between' : 'center',
    alignItems: 'center',
    fontSize: isBrowser ? '1.0rem' : '0.75rem',
    textTransform: 'uppercase',
    alignSelf: 'end',
    marginBottom: isBrowser ? null : '3px',
  },

  arrow: {
    fontSize: isBrowser ? null : '1rem',
  },

  yearStyle: {
    alignSelf: 'end',
    fontSize: '1.0rem',
    maxWidth: 'fit-content',
  },

  inputYearStyle: {
    color: 'red',
    fontSize: isBrowser ? '1.0rem' : '0.75rem',
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  },

  tableMain: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#595959',
  },
  
  tableStyle: {
    padding: 0,
    border: isBrowser ? `4px solid ${theme.palette.grey[600]}` : `2px solid ${theme.palette.grey[600]}`,
    position: 'relative',
    color: 'white',
  },

  dayStyle: {
    position: 'absolute',
    top: isBrowser ? 3 : 1,
    left: isBrowser ? 8 : 3,
    fontSize: isBrowser ? '0.85rem' : '0.7rem',
    zIndex: 4,
  },

  divInCell: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: isBrowser ? 8 : 2,
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: isBrowser ? null : 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'rgb(66, 66, 66)',
    height: '100%',
    objectFit: 'cover',
    borderBottom: isBrowser ? '5px solid transparent' : '3px solid transparent'
  },

  imageInCell: {
    height: isBrowser ? '100%' : '60%',
  },

  trainingText: {
    color: 'black',
    fontSize: isBrowser ? null : '0.8rem',
    alignSelf: isBrowser ? null : 'center'
  },

  legendDiv: {
    display: 'flex',
    alignItems: 'center',
    marginRight: isBrowser ? 45 : null,
    paddingBottom: isBrowser ? null : '10px',
  },

  legendMain: {
    display: isBrowser ? 'flex' : 'grid',
    gridTemplateColumns: isBrowser ? null : 'auto auto',
    marginTop: 20,
  },

  legendIcon: {
    fontSize: '18px',
    marginRight: isBrowser ? 5 : 10,
    filter: 'drop-shadow(2px 2.5px 2px rgb(0 0 0 / 0.7))',
  }
}));

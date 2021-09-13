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
    gridTemplateColumns: isBrowser ? '40% auto 40%' : '70% 30%',
    color: 'red',
  },

  title: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'red',
  },

  mountSwitch: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.0rem',
    textTransform: 'uppercase',
    alignSelf: 'end',
  },

  yearStyle: {
    alignSelf: 'end',
    fontSize: '1.0rem',
    maxWidth: 'fit-content',
  },

  inputYearStyle: {
    color: 'red',
    fontSize: '1.0rem',
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
    border: `4px solid ${theme.palette.grey[600]}`,
    position: 'relative',
    color: 'white',
  },

  dayStyle: {
    position: 'absolute',
    top: 3,
    left: 8,
    fontSize: '0.85rem',
    zIndex: 4,
  },

  divInCell: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'rgb(66, 66, 66)',
    height: '100%',
    objectFit: 'cover',
    borderBottom: '5px solid transparent'
  },

  imageInCell: {
    height: '100%',
  }
}));

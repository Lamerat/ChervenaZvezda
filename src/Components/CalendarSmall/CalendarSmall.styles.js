import { makeStyles } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    margin: 0,
    boxShadow: isBrowser ? '2px 2px 2px black' : '1px 1px 1px black',
    backgroundColor: 'white',
  },

  title: {
    backgroundColor: 'red',
    color: 'white',
    minHeight: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textTransform: 'uppercase',
    paddingLeft: 10,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    borderBottom: '1px solid black'
  },

  mainTable: {
    padding: 10,
    
  },

  tableMain: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: theme.palette.grey[500],
  },
  
  tableStyle: {
    padding: 10,
    border: `1px solid ${theme.palette.grey[100]}`,
    position: 'relative',
    maxHeight: 41,
    color: 'white',
  },

  nestedDiv: {
    display: 'block',
    position: 'absolute',
    backgroundColor: theme.palette.grey[200],
    padding: 5,
    border: `1px solid gray`,
    zIndex: 100,
    bottom: 41,
    right: 0,
    boxShadow: '2px 2px 2px black',
    minWidth: 340,
    maxWidth: 340,
    maxHeight: 200,
  },

  nestedTitle: {
    backgroundColor: 'red',
    color: 'white',
    minHeight: 60,
    maxHeight: 60,
    display: 'flex',
    alignItems: 'flex-start',
    textTransform: 'uppercase',
    padding: 10,
    letterSpacing: 1.1,
  },

  trainingDiv: {
    height: 118,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: '1 1 auto',
    alignItems: 'center',
  },

  trainingImage: {
    maxHeight: '100%',
  },

  trainingText: {
    color: 'black',
    fontSize: '1.2rem',
  },

  dayStyle: {
    fontSize: '50px',
    padding: 0,
    fontWeight: 'normal',
    lineBreak: 0,
    alignSelf: 'center',
    letterSpacing: 0.8,
  },

  rightSide: {
    width: '70%',
    display: 'flex',
    paddingLeft: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontWeight: 'normal',
    fontSize: '0.675rem'
  },

  teamLogo: {
    maxHeight: 70,
  },

  statistic: {
    padding: '10px 0px 10px 0px',
    border: 0,
  },

  versus: {
    padding: '10px 10px 20px 10px',
    fontWeight: 'bold',
    fontSize: '2.2rem',
    border: 0,
  },

  result: {
    padding: '0px 10px 0px 10px',
    fontWeight: 'bold',
    fontSize: '2.2rem',
    border: 0
  },

  smallCell: {
    padding: 0,
    border: 0,
    fontSize: '0.7rem',
  },

  place: {
    width: '30%',
    fontSize: '0.7rem',
    display: 'flex',
    justifyContent: 'flex-end',
    
    textAlign: 'right'
  }
}));

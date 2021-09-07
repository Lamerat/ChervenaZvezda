import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    margin: 0,
    boxShadow: '2px 2px 2px black',
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

  body: {
    backgroundColor: 'white',
  },
  
  date: {
    paddingLeft: 10,
    textAlign: 'center',
    fontSize: '0.7rem'
  },

  statistic: {
    padding: '10px 0px 10px 0px',
  },

  teamLogo: {
    maxHeight: 70,
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

  versus: {
    padding: '10px 10px 20px 10px',
    fontWeight: 'bold',
    fontSize: '2.2rem'
  },
}));

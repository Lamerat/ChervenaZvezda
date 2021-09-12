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
    gridTemplateColumns: isBrowser ? '33% auto 33%' : '70% 30%'
  },

  title: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'red',
  },

  paginationStyle: {
    marginLeft: isBrowser ? 0 : -10,
    display: 'flex',
    justifySelf: isBrowser ? 'center' : 'left'
  },

  floatButton: {
    position: 'fixed',
    zIndex: 100,
    right: 26,
    bottom: 16,
  },  

  dateButton: {
    alignSelf: 'center',
    justifySelf: 'left',
    marginLeft: -5
  },

  dateFilters: {
    position: 'absolute',
    border: '1px solid black',
    backgroundColor: 'antiquewhite',
    boxShadow: isBrowser ? '2px 2px 5px black' : '1.5px 1.5px 3.5px black',
    top: -22,
    minWidth: isBrowser ? 300 : '100%',
    maxWidth: isBrowser ? 300 : '100%',
    zIndex: 2,
    padding: 20,
  },

  topNewsHolder: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '40% 60%',
    minHeight: 471,
    maxHeight: 471,
  },

  secondNews: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: -10,
    marginBottom: -10,
  },

  allNewsHolder: {
    display: 'flex',
    marginTop: 10,
    marginLeft: -20,
    flexWrap: 'wrap',
  },

  root: {
    maxHeight: '100%',
    
  },
  media: {
    height: 250,
    backgroundPosition: 'top'
  },
}));

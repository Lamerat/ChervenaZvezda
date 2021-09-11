import { makeStyles, alpha } from '@material-ui/core/styles';
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

  root: {
    maxWidth: 605,
    minHeight: 605,
  },
  media: {
    height: 140,
  },
}));

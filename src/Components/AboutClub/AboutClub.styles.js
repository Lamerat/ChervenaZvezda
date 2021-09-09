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
    paddingBottom: isBrowser ? 4 : 1,
    borderBottom: `2px solid ${theme.palette.primary[200]}`
  },

  title: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'red',
  }
}));

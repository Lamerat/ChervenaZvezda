import { makeStyles, alpha } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: alpha(theme.palette.secondary.main, 0.98),
    zIndex: 100,
  },

  button: {
    position: 'absolute',
    top: 30,
    color: alpha(theme.palette.grey[100], 0.5)
  }
}));

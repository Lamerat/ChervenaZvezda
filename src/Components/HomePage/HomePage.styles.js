import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 40,
    padding: 0,
  },

  banners: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  mobileMainDiv: {
    marginTop: 20,
    padding: 8,
  },

  mobileItem: {
    paddingBottom: 8,
  }
}));

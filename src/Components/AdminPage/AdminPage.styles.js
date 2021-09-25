import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 40,
    padding: 0,
  },

  paperStyle: {
    padding: 20,
    borderRadius: 0,
    margin: 0,
    marginBottom: 50,
  },

  topDiv: {
    paddingBottom: 4,
    borderBottom: `2px solid ${theme.palette.primary.main}`
  },

  title: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'red',
  },

  tabs: {
    backgroundColor: theme.palette.secondary[300],
  },

}));

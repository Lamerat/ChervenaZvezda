import { makeStyles, alpha } from '@material-ui/core/styles';




export const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    margin: 0,
    minHeight: 36,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    boxShadow: '2px 2px 2px black',
    color: 'white',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px 0 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    letterSpacing: 1,
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.palette.primary[900]
    }
  },

  separator: {
    width: 1,
    borderLeft: `1px solid ${theme.palette.common.white}`,
    padding: 0,
    margin: '10px 0px 10px 0px',
  },

  endPart:{
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  search: {
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary[900], 1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0
  },

  inputRoot: {
    color: 'inherit',
  },
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 10,
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },

  dropDown: {
    backgroundColor: '#b2b2b2',
    color: '#666666',
    fontWeight: 'normal',
    position: 'absolute',
    left: 0,
    top: 36,
    boxShadow: '2px 2px 2px black',
    zIndex: 10,
  },

  menuItem: {
    minHeight: 36,
    padding: '0px 20px 0px 20px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: 'black'
    }
  },

  
}));

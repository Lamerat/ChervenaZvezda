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
    backgroundColor: alpha(theme.palette.common.white, 0.02),
    border: 0,
  },

  topDiv: {
    paddingBottom: isBrowser ? 4 : 1,
    borderBottom: `2px solid white`,
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
  },

  switchHolder: {
    display: 'flex',
    alignItems: 'end',
    marginLeft: 10,
  },

  switch: {    
    color: isBrowser ? theme.palette.grey[400] : 'black',
  },

  sectionStyle: {
    color: theme.palette.grey[400],
  },

  dividerStyle: {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  },

  playersHolder: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    marginLeft: -10,
    marginRight: isBrowser ? -10 : 10,
  },

  mobileSwitches: {
    position: 'absolute',
    backgroundColor: theme.palette.grey[300],
    minHeight: 120,
    padding: '10px 10px 10px 15px',
    width: '150px',
    border: '1px solid black',
    top: -2,
    left: 0,
    boxShadow: '1.5px 1.5px 1.5px black',
    zIndex: 5,
    alignItems: 'stretch',
    display: 'flex',
  }
}));

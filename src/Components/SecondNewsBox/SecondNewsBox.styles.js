import { makeStyles } from '@material-ui/core/styles';
import { isBrowser } from "react-device-detect";

export const useStyles = makeStyles((theme) => ({
  main: {
    margin: '10px 0px 10px 20px',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 0,
    padding: 0,
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '30% 70%',
    minHeight: 144,
    maxHeight: 144,
    overflow: 'hidden',
  },

  mainSmall: {
    margin: isBrowser ? '10px 0px 10px 20px' : '10px 0px 10px 0px',
    borderRadius: 0,
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: 0,
    minHeight: 130,
    maxHeight: 130,
    minWidth: isBrowser ? 400 : '100%',
    maxWidth: isBrowser ? 400 : '100%',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows: '55% 45%',
    gridTemplateColumns: '28% 72%',
    gridTemplateAreas: `
      'photo title'
      'text text'`
  },

  imageStyle: {
    maxWidth: '100%',
    borderRight: `1px solid ${theme.palette.grey[400]}`,
  },

  textBox: {
    padding: 10,
    overflow: 'hidden',
  },

  titleStyle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: '1.25rem',
  },

  imageHolder: {
    marginLeft: 5,
    marginTop: 5,
    overflow: 'hidden',
    gridArea: 'photo',
  },

  smallText: {
    display: 'flex',
    alignItems: 'top',
    gridArea: 'text',
    padding: 10,
  },

  smallImage: {
    maxWidth: '100%',
  },

  smallTextBox: {
    padding: '10px 5px 0px 10px',
    overflow: 'hidden',
  },
  
  smallTitle: {
    marginTop: 10,
  }
}));

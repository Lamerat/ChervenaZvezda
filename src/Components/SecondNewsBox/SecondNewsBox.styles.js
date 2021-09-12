import { makeStyles } from '@material-ui/core/styles';

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
    margin: '10px 0px 10px 20px',
    borderRadius: 0,
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: 0,
    minHeight: 130,
    maxHeight: 130,
    minWidth: 400,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows: '50% 50%',
    gridTemplateColumns: '25% 75%',
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
    overflow: 'hidden',
    gridArea: 'photo',
  },

  smallText: {
    display: 'flex',
    alignItems: 'center',
    gridArea: 'text',
    padding: 10,
  },

  smallImage: {
    maxWidth: '100%',
  }
}));

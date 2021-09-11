import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  main: {
    margin: '10px 0px 10px 20px',
    boxShadow: `2px 2px 3px ${theme.palette.grey[800]}`,
    borderTop: `1px solid ${theme.palette.grey[600]}`,
    borderLeft: `1px solid ${theme.palette.grey[600]}`,
    padding: 0,
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '30% 70%',
    minHeight: 144,
    overflow: 'hidden',
  },

  imageStyle: {
    maxWidth: '100%',
    borderRight: `1px solid ${theme.palette.grey[400]}`,
  },

  textBox: {
    padding: 10,
    overflow: 'hidden',
  }
}));

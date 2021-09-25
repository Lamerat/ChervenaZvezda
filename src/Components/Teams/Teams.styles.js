import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imageHolder: {
    maxHeight: 56,
    maxWidth: 56,
    width: 56,
    height: 56,
    overflow: 'hidden',
    marginRight: 15,
  },

  imageStyle: {
    height: '100%',
  },

  addNewTeamBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },

  inputStyle: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },

}));

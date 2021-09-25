import { makeStyles } from '@material-ui/core/styles';
const starImage = './images/starAnimate.gif'

export const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${starImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

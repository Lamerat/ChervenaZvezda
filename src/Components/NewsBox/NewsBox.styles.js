import { makeStyles, alpha } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    margin: 0,
    boxShadow: '2px 2px 2px black',
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '70% 30%',
    borderLeft: '1px solid black',
    borderTop: '1px solid black',
    maxHeight: 441
  },

  rightSide: {
    display: 'grid',
    gridTemplateRows: '20% 20% 20% 20% 20%',
    gridTemplateColumns: '100%',
  },

  imageStyle: {
    maxWidth: '100%',
    maxHeight: '100%',
    padding: 0,
  },

  mainNew: {
    position: 'absolute',
    fontSize: '0.875rem',
    bottom: 0,
    backgroundColor: alpha(theme.palette.common.white, 0.65),
    width: '100%',
    minHeight: '20%',
    maxHeight: '20%',
  }, 

  smallNews: {
    backgroundColor: 'white',
    padding: '12px 12px 0px 12px',
    cursor: 'pointer',
    
  },

  smallNewsActive: {
    backgroundColor: 'red',
    padding: 12,
    cursor: 'pointer',
    
  },

  dateStyle: {
    color: 'red',
  },

  dateStyleActive: {
    color: 'white',
  },

  lineStyle: {
    padding: '12px 12px 0px 12px',
    borderBottom: `1px solid ${theme.palette.grey[400]}`
  },

  resumeStyle: {
    fontSize: '0.87rem',
    paddingTop: 4,
  },

  arrows: {
    display: 'grid',
    gridTemplateRows: '20% 20% 20% 20% 20%',
    gridTemplateColumns: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '100%',
    minWidth: 44,
  },

  marker: {
    borderRight: '22px solid red',
    borderLeft: '22px solid transparent',
    borderTop: '44px solid transparent',
    borderBottom: '44px solid transparent',
  },

  mainNewContainer: {
    display: 'flex',
    height: '100%',
  }, 

  mainDate: {
    fontSize: '2.2rem',
    padding: 0,
    paddingTop: 5,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: alpha(theme.palette.primary[900], 0.75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 88,
    maxWidth: 88,
    minHeight: 88,
    maxHeight: 88,
  },

  mountDiv: {
    backgroundColor: alpha(theme.palette.primary[500], 0.5),
    width: '100%',
    height: '40%',
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  title: {
    margin: 8,
    fontSize: '1.0rem',
    fontWeight: 'bold',
    borderBottom: `1px solid ${theme.palette.grey[600]}`
  },

  text: {
    padding: '0px 8px 8px 8px',
    fontSize: '0.875rem',
  },

  mobileMain: {
    borderLeft: '1px solid black',
    borderTop: '1px solid black',
    width: '100%',
    height: '220px',
    boxShadow: '1.5px 1.5px 1.5px black',
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
  },

  imageStyleMobile: {
    maxWidth: '100%',
    objectFit: 'cover',
    padding: 0,
  }, 

  newsBody: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: alpha(theme.palette.common.white, 0.65),
    width: '100%',
    minHeight: '32%',
    maxHeight: '32%',
  },

  titleMobile: {
    margin: 5,
    fontSize: '0.8rem',
    fontWeight: 'bold',
    borderBottom: `1px solid ${theme.palette.grey[600]}`
  },

  textMobile: {
    padding: '0px 5px 5px 5px',
    fontSize: '0.75rem',
  },

  mainDateMobile: {
    fontSize: '1.4rem',
    padding: 0,
    paddingTop: 5,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: alpha(theme.palette.primary[900], 0.75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 50,
    maxWidth: 50,
    minHeight: 50,
    maxHeight: 50,
  },

  mountDivMobile: {
    backgroundColor: alpha(theme.palette.primary[500], 0.5),
    width: '100%',
    height: '40%',
    fontSize: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallDate: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: alpha(theme.palette.primary[900], 0.75),
    width: 50,
    height: 50,
  },

}));

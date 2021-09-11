import {
  unstable_createMuiStrictModeTheme as createTheme,
  ThemeProvider
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/grey';

const theme = createTheme({

  palette: {
    primary: red,
    secondary: amber,
    
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

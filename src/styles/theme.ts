import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0059BC',
      light: '#fff',
    },
    secondary: {
      main: '#e0e0e0',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1440,
    },
  },
});

export default theme;

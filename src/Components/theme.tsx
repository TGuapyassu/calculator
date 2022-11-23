import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#fff149' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
});

export default Theme;
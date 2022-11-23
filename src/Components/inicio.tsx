import { CssBaseline, ThemeProvider } from '@mui/material';
import Theme from 'Components/theme';
import Calculator from './calculator';


const Inicio = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Calculator />
      </ThemeProvider>
    </div>
  );
};

export default Inicio;
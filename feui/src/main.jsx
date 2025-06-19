import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/css/theme';
import { CssBaseline } from '@mui/material';
import Routing from './config/router.config';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Routing />
    </ThemeProvider>
  </StrictMode>,
)
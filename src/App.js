import './styles/_general.scss'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';

const ContactUs = lazy(() => import('./layout/ContactUs/ContactUs'))

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&&:hover::before": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
          },
          "&&:active::before": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
          },
          "&&::after": {
            borderBottom: "none"
          }
        }
      }
    }
  }
});
function App() {



  return (
    <div className="App">
      <Suspense fallback={null}>
        <ThemeProvider theme={theme}>
          <a className="skip-link" href="#contactUs">Skip to content</a>
          <ContactUs />
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;

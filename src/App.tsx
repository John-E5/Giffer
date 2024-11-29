import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  )
}

export default App

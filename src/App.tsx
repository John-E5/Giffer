import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { GifferProvider } from './context/GifferContext';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GifferProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GifferProvider>
    </ThemeProvider>
  )
}

export default App

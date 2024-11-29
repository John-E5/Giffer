import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { GifferProvider } from './context/GifferContext';
import SavedGifs from './pages/SavedGifs';

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
            <Route path="/saved" element={<SavedGifs />} />
          </Routes>
        </BrowserRouter>
      </GifferProvider>
    </ThemeProvider>
  )
}

export default App

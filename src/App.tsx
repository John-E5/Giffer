import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

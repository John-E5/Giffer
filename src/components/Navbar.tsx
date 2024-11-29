import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Navbar: React.FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Giffer Gifs
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Giffer Gifs
        </Typography>
        <Button
          component={Link}
          to="/saved"
          color="inherit"
          startIcon={<FavoriteIcon />}
        >
          My Saved GIFs
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
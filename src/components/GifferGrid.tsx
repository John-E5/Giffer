import React from 'react';
import { Card, CardMedia, CardActions, Skeleton, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Gif } from '../types/types';
import { useGifs } from '../context/GifferContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface GifferGridProps {
  gifs: Gif[];
  loading?: boolean;
}

const GifferGrid: React.FC<GifferGridProps> = ({ gifs, loading = false }) => {
  const { state, dispatch } = useGifs();

  const handleSaveGif = (gif: Gif) => {
    dispatch({ type: 'TOGGLE_SAVE_GIF', payload: gif });
  };
  
  if (loading) {
    return (
      <Grid container spacing={2} sx={{ p: 2 }}>
        {[...Array(12)].map((_, index) => (
          <Grid size={{ xs:12, sm:6, md:4 }} key={index}>
            <Skeleton variant="rectangular" height={200} width={300} animation="wave" />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {gifs.map((gif) => (
        <Grid size={{ xs:12, sm:6, md:4 }}  key={gif.id}>
          <Card>
            <CardMedia
              component="img"
              image={gif.images.fixed_height.url}
              alt={gif.title}
              sx={{ height: 200, objectFit: 'cover' }}
            />
            <CardActions disableSpacing>
              <IconButton
                onClick={() => handleSaveGif(gif)}
                color={state.savedGifs.some(savedGif => savedGif.id === gif.id) ? 'secondary' : 'default'}
                sx={{
                  transition: 'transform 0.2s',
                  '&:active': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                {state.savedGifs.some(savedGif => savedGif.id === gif.id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GifferGrid;
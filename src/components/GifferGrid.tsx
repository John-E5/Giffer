import React from 'react';
import { Card, CardMedia, CardActions, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Gif } from '../types/types';

interface GifferGridProps {
  gifs: Gif[];
  loading?: boolean;
}

const GifferGrid: React.FC<GifferGridProps> = ({ gifs, loading = false }) => {

  if (loading) {
    return (
      <Grid container spacing={2} sx={{ p: 2 }}>
        {[...Array(12)].map((_, index) => (
          <Grid size={{ xs:12, sm:6, md:4 }} key={index}>
            <Skeleton variant="rectangular" height={200} animation="wave" />
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
            <CardActions />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GifferGrid;
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import GifGrid from '../components/GifferGrid';
import { useGifs } from '../context/GifferContext';

const SavedGifs: React.FC = () => {
  const { state } = useGifs();

  return (
    <Container maxWidth='xl'>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
            Saved GIFs
          </Typography>
          {state.savedGifs.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '50vh'
              }}
            >
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                No saved GIFs yet. Start saving some GIFs!
              </Typography>
            </Box>
          ) : (
            <GifGrid gifs={state.savedGifs} />
          )}
        </Box>
      </Container>
  );
};

export default SavedGifs;
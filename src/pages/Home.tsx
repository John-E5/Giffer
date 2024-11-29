import React, { useEffect } from 'react';
import { fetchTrendingGifs } from '../api/giphyApi';
import { Container, Box } from '@mui/material';
import GifferGrid from '../components/GifferGrid';
import { useGifs } from '../context/GifferContext';

const Home: React.FC = () => {
  const { state, dispatch } = useGifs();

  const getTrendingGifs = async () => {
    try {
      const gifs = await fetchTrendingGifs();
  
      dispatch({ 
        type: 'FETCH_GIFS_SUCCESS', 
        payload: gifs 
      });
    } catch {
      dispatch({ type: 'FETCH_GIFS_ERROR', payload: 'Failed to load GIFs' });
    }
  }

  useEffect(() => {
    getTrendingGifs();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <GifferGrid gifs={state.gifs} />
      </Box>
    </Container>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import { fetchTrendingGifs, searchGifs } from '../api/giphyApi';
import { Container, Box, Alert } from '@mui/material';
import GifferGrid from '../components/GifferGrid';
import { useGifs } from '../context/GifferContext';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const { state, dispatch } = useGifs();
  const [, setSearchQuery] = useState('');


  const loadGifs = async (query?: string) => {
    dispatch({ type: 'FETCH_GIFS_START' });
    try {
      const response = query 
        ? await searchGifs(query)
        : await fetchTrendingGifs();
  
      dispatch({ 
        type: 'FETCH_GIFS_SUCCESS', 
        payload: { 
          gifs: response.data,
        } 
      });
    } catch {
      dispatch({ type: 'FETCH_GIFS_ERROR', payload: 'Failed to load GIFs' });
    }
  };

  useEffect(() => {
    loadGifs();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    loadGifs(query);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
      <SearchBar onSearch={handleSearch} />
        {state.error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {state.error}
          </Alert>
        )}
        <GifferGrid gifs={state.gifs} loading={state.loading}/>
      </Box>
    </Container>
  )
}

export default Home;
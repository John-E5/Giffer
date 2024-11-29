import React, { useEffect, useState } from 'react';
import { fetchTrendingGifs, searchGifs } from '../api/giphyApi';
import { Container, Box, Alert, Pagination, CircularProgress } from '@mui/material';
import GifferGrid from '../components/GifferGrid';
import { useGifs } from '../context/GifferContext';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const { state, dispatch } = useGifs();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);


  const loadGifs = async (query?: string, pageNum: number = 1) => {
    dispatch({ type: 'FETCH_GIFS_START' });
    try {
      const response = query 
        ? await searchGifs(query, pageNum)
        : await fetchTrendingGifs(pageNum);
  
      dispatch({ 
        type: 'FETCH_GIFS_SUCCESS', 
        payload: { 
          gifs: response.data,
          page: pageNum,
          totalCount: response.pagination.total_count
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
    setPage(1);
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
        <GifferGrid gifs={state.gifs} loading={state.loading} />
        {state.hasMore && !state.loading && (
          <Pagination
            count={Math.ceil(state.totalCount / 25)}
            page={page}
            onChange={(_, value) => {
              setPage(value);
              loadGifs(searchQuery, value);
            }}
            sx={{ display: 'flex', justifyContent: 'center', my: 4 }}
          />
        )}
        {state.loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default Home;
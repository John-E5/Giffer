import React, { useEffect } from 'react';
import { fetchTrendingGifs } from '../api/giphyApi';

const Home: React.FC = () => {

  const getTrendingGifs = async () => {
    const gifs = await fetchTrendingGifs();
    console.log(gifs);
  }

  useEffect(() => {
    getTrendingGifs();
  }, []);

  return (
    <h1>Home</h1>
  )
}

export default Home;
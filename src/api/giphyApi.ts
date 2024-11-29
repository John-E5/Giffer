import { GiphyResponse } from '../types/types';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = import.meta.env.VITE_GIPHY_BASE_URL;

export const fetchTrendingGifs = async (): Promise<GiphyResponse> => {
  const response = await fetch(
    `${BASE_URL}/trending?api_key=${API_KEY}&limit=6`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const searchGifs = async (query: string): Promise<GiphyResponse> => {
  const response = await fetch(
    `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=6`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
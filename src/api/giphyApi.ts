import { Gif } from '../types/types';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = import.meta.env.VITE_GIPHY_BASE_URL;

export const fetchTrendingGifs = async (): Promise<Gif> => {
  const response = await fetch(
    `${BASE_URL}/trending?api_key=${API_KEY}&limit=20`
  );
  const data = await response.json();
  return data.data;
};
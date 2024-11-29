import { GiphyResponse } from '../types/types';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = import.meta.env.VITE_GIPHY_BASE_URL;
const LIMIT = 6;

export const fetchTrendingGifs = async (page: number = 1): Promise<GiphyResponse> => {
  const offset = (page - 1) * LIMIT;
  const response = await fetch(
    `${BASE_URL}/trending?api_key=${API_KEY}&limit=${LIMIT}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};

export const searchGifs = async (query: string, page: number = 1): Promise<GiphyResponse> => {
  const offset = (page - 1) * LIMIT;
  const response = await fetch(
    `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};
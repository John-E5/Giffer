import React, { createContext, useContext, useReducer } from 'react';
import { GifferState, GifferAction, Gif } from '../types/types';

const loadSavedGifs = (): Gif[] => {
  try {
    const saved = localStorage.getItem('savedGifs');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading saved GIFs:', error);
    return [];
  }
};

const initialState: GifferState = {
  gifs: [],
  loading: false,
  error: null,
  savedGifs: loadSavedGifs(),
  hasMore: true,
  totalCount: 0
};

const GifferContext = createContext<{
  state: GifferState;
  dispatch: React.Dispatch<GifferAction>;
} | undefined>(undefined);

const gifferReducer = (state: GifferState, action: GifferAction): GifferState => {
  switch (action.type) {
    case 'FETCH_GIFS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_GIFS_SUCCESS': {
      const newGifs = action.payload.page === 1 
        ? action.payload.gifs 
        : action.payload.gifs;
      
      return { 
        ...state, 
        loading: false, 
        gifs: newGifs,
        totalCount: action.payload.totalCount,
        hasMore: newGifs.length < action.payload.totalCount
      };
    }
    case 'FETCH_GIFS_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'TOGGLE_SAVE_GIF': {
      const gifExists = state.savedGifs.some(gif => gif.id === action.payload.id);
      const newSavedGifs = gifExists
        ? state.savedGifs.filter(gif => gif.id !== action.payload.id)
        : [...state.savedGifs, action.payload];
      
      localStorage.setItem('savedGifs', JSON.stringify(newSavedGifs));
      
      return { ...state, savedGifs: newSavedGifs };
    }
    default:
      return state;
  }
};

export const GifferProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gifferReducer, initialState);

  return (
    <GifferContext.Provider value={{ state, dispatch }}>
      {children}
    </GifferContext.Provider>
  );
};

export const useGifs = () => {
  const context = useContext(GifferContext);
  if (!context) {
    throw new Error('useGifs must be used within a GifProvider');
  }
  return context;
};
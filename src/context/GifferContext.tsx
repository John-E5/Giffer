import React, { createContext, useContext, useReducer } from 'react';
import { GifferState, GifferAction } from '../types/types';

const initialState: GifferState = {
  gifs: [],
  loading: false,
  error: null
};

const GifferContext = createContext<{
  state: GifferState;
  dispatch: React.Dispatch<GifferAction>;
} | undefined>(undefined);

const gifferReducer = (state: GifferState, action: GifferAction): GifferState => {
  switch (action.type) {
    case 'FETCH_GIFS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_GIFS_SUCCESS':
      return { ...state, loading: false, gifs: action.payload.gifs };
    case 'FETCH_GIFS_ERROR':
      return { ...state, loading: false, error: action.payload };
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
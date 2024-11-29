export interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
      height: string;
      width: string;
    };
  };
}

export interface GiphyResponse {
  data: Gif[];
}

export interface GifferState {
  gifs: Gif[];
  loading: boolean;
  error: string | null;
}

export type GifferAction = 
  | { type: 'FETCH_GIFS_START' }
  | { type: 'FETCH_GIFS_SUCCESS'; payload: { gifs: Gif[] }}
  | { type: 'FETCH_GIFS_ERROR'; payload: string };
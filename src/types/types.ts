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
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}

export interface GifferState {
  gifs: Gif[];
  loading: boolean;
  error: string | null;
  savedGifs: Gif[];
  hasMore: boolean;
  totalCount: number;
}

export type GifferAction = 
  | { type: 'FETCH_GIFS_START' }
  | { type: 'FETCH_GIFS_SUCCESS'; payload: { gifs: Gif[], page: number, totalCount: number; }}
  | { type: 'FETCH_GIFS_ERROR'; payload: string }
  | { type: 'TOGGLE_SAVE_GIF'; payload: Gif };
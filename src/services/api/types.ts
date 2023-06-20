export type DefaultResponse<T> = {
  page: 1;
  results: T[];
  total_pages: 3;
  total_results: 50;
};

export type GetMoviesByQueryRequest = {
  query: string;
  page?: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type GetMoviesByQueryResponse = DefaultResponse<Movie>;

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

export type Genre = {
  id: number;
  name: string;
};

export type GetGenresResponse = {
  genres: Genre[];
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      official: boolean;
      published_at: string;
      site: string;
      size: number;
      type: string;
    }[];
  };

  vote_average: number;
  vote_count: number;
};

export type GetMovieByIdResponse = MovieDetail;

export type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type GetLanguagesResponse = Language[];

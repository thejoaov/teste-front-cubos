import { AxiosPromise } from 'axios';
import apiInstance from '../../config/api';
import {
  GetGenresResponse,
  GetMoviesByQueryRequest,
  GetMoviesByQueryResponse,
} from './types';

export function getMoviesByQuery({
  query,
  page = 1,
}: GetMoviesByQueryRequest): AxiosPromise<GetMoviesByQueryResponse> {
  return apiInstance.get('/search/movie', {
    params: {
      query,
      page: page.toString(),
      perPage: '5',
      language: 'pt-BR',
      append_to_response: 'images',
    },
  });
}

export function getGenres(): AxiosPromise<GetGenresResponse> {
  return apiInstance.get('/genre/movie/list', {
    params: {
      language: 'pt-BR',
    },
  });
}

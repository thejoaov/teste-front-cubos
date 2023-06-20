import { AxiosResponse } from 'axios';
import apiInstance from '../../config/api';
import { GetMoviesByQueryRequest, GetMoviesByQueryResponse } from './types';

export function getMoviesByQuery({
  query,
  page = 1,
}: GetMoviesByQueryRequest): Promise<AxiosResponse<GetMoviesByQueryResponse>> {
  return apiInstance.get(
    `/search/movie?${new URLSearchParams({
      query,
      page: page.toString(),
    })}`
  );
}

import MockAdapter from 'axios-mock-adapter';

import apiInstance from '../../../config/api';
import { GetMoviesByQueryResponse } from '../types';
import { getGenres, getMoviesByQuery } from '..';

const mockApi = new MockAdapter(apiInstance);

describe('getMoviesByQuery', () => {
  afterEach(() => {
    mockApi.reset();
  });

  it('should return a list of movies for a given query', async () => {
    const query = 'batman';
    const page = 1;
    const expectedResponse: GetMoviesByQueryResponse = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/s5HQf2Gb3lIO2cRcFwNL9sn1o1X.jpg',
          genre_ids: [28, 12],
          id: 272,
          original_language: 'en',
          original_title: 'Batman',
          overview: 'Having witnessed his parents',
          popularity: 35.553,
          poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
          release_date: '1989-06-23',
          title: 'Batman',
          video: false,
          vote_average: 7.1,
          vote_count: 4078,
        },
        {
          adult: false,
          backdrop_path: '/f5mFmAYaVDkEuezGJfwpLOz8aOx.jpg',
          genre_ids: [28, 80, 18, 53],
          id: 364,
          original_language: 'en',
          original_title: 'Batman Returns',
          overview: 'Having defeated the Joker, Batman',
          popularity: 32.598,
          poster_path: '/2va32apQP97gvUxaMnL5wYt4CRB.jpg',
          release_date: '1992-06-19',
          title: 'Batman Returns',
          video: false,
          vote_average: 6.9,
          vote_count: 3017,
        },
      ],
      total_pages: 3,
      total_results: 50,
    };

    mockApi
      .onGet('/search/movie', {
        params: {
          query,
          page: page.toString(),
          perPage: '5',
          language: 'pt-BR',
          append_to_response: 'images',
        },
      })
      .reply(200, expectedResponse);

    const response = await getMoviesByQuery({ query, page });

    expect(response.status).toBe(200);
    expect(response.data).toEqual(expectedResponse);
    expect(mockApi.history.get.length).toBe(1);
  });

  it('should throw an error if the API returns a non-2xx response', async () => {
    const query = 'batman';
    const page = 1;
    mockApi.onGet('/search/movie').reply(404);

    await expect(getMoviesByQuery({ query, page })).rejects.toThrow(
      'Request failed with status code 404'
    );
    expect(mockApi.history.get.length).toBe(1);
  });

  it('should return a list of genres', async () => {
    const expectedResponse = {
      genres: [
        {
          id: 28,
          name: 'Ação',
        },
        {
          id: 12,
          name: 'Aventura',
        },
        {
          id: 16,
          name: 'Animação',
        },
      ],
    };

    mockApi.onGet('/genre/movie/list').reply(200, expectedResponse);

    const response = await getGenres();

    expect(response.status).toBe(200);
    expect(response.data).toEqual(expectedResponse);
    expect(mockApi.history.get.length).toBe(1);
  });

  it('should throw an error if the API returns a non-2xx response', async () => {
    mockApi.onGet('/genre/movie/list').reply(404);

    await expect(getGenres()).rejects.toThrow(
      'Request failed with status code 404'
    );
    expect(mockApi.history.get.length).toBe(1);
  });
});

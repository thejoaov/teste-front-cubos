import {
  render,
  fireEvent,
  waitFor,
  RenderResult,
} from '@testing-library/react';
import { SpyInstance, describe, it, vi } from 'vitest';
import Home from '../index';
import MockAdapter from 'axios-mock-adapter';
import apiInstance from '../../../config/api';
import { GetMoviesByQueryResponse } from '../../../services/api/types';
import { CachedInfoProvider } from '../../../contexts/cachedInfo';

const mockApi = new MockAdapter(apiInstance);

let consoleErrorSpy: SpyInstance;
let mockPage: RenderResult;

describe('Home', () => {
  beforeEach(() => {
    mockApi.reset();

    mockApi.onGet('/genre/movie/list').reply(200, {
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
    });

    consoleErrorSpy = vi.spyOn(console, 'error');
    mockPage = render(
      <CachedInfoProvider>
        <Home />
      </CachedInfoProvider>
    );
  });

  it('renders correctly', () => {
    const { getByRole } = mockPage;

    const searchElement = getByRole('search');
    const listElement = getByRole('list');

    expect(searchElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });

  it('should search movies', async () => {
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

    const { getByRole, getByText } = mockPage;

    const searchElement = getByRole('search');
    const listElement = getByRole('list');

    expect(searchElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();

    fireEvent.change(searchElement, { target: { value: query } });

    await waitFor(() => {
      const movieCard = getByText(expectedResponse.results[0].title);

      expect(movieCard).toBeInTheDocument();
    });
  });

  it('should show nothing when the api gives an error', async () => {
    const query = 'batman';
    const page = 1;

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
      .reply(500);

    const { getByRole } = mockPage;

    const searchElement = getByRole('search');
    const listElement = getByRole('list');

    expect(searchElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();

    fireEvent.change(searchElement, { target: { value: query } });

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});

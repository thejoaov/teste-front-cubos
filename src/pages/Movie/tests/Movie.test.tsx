import { render, RenderResult } from '@testing-library/react';
import { describe, it } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import apiInstance from '../../../config/api';
import { CachedInfoProvider } from '../../../contexts/cachedInfo';
import Movie from '../index';
import { getMovieById } from '../../../services/api';
import { MovieInfoProps } from '../../../components/MovieInfo';

const mockApi = new MockAdapter(apiInstance);

let mockPage: RenderResult;

const mockMovie: MovieInfoProps = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: null,
  budget: 1000000,
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
  ],
  homepage: '',
  id: 1,
  imdb_id: 'tt1234567',
  original_language: 'en',
  original_title: 'Test Movie',
  overview: 'This is a test movie',
  popularity: 5.0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  release_date: '2023-06-22',
  revenue: 2000000,
  runtime: 120,
  spoken_languages: [],
  status: 'Released',
  tagline: 'A test movie',
  title: 'Test Movie',
  video: false,
  videos: {
    results: [
      {
        id: '123456',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: '123456',
        name: 'Test Movie',
        official: true,
        published_at: '2021-06-22T00:00:00.000Z',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
    ],
  },
  vote_average: 7.5,
  vote_count: 100,
};

mockApi
  .onAny('/movie/1', {
    params: {
      language: 'pt-BR',
      append_to_response: 'videos',
    },
  })
  .reply(200, mockMovie);

const router = createMemoryRouter(
  [
    {
      path: '/movie/:id',
      element: <Movie />,
      loader: async ({ params }) => {
        if (!params.id) throw new Error('Movie id not provided');
        const { data } = await getMovieById(params.id);
        return data;
      },
    },
  ],
  {
    initialEntries: ['/movie/1'],
    initialIndex: 0,
  }
);

describe('Movie', () => {
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

    mockPage = render(
      <CachedInfoProvider>
        <RouterProvider router={router} />
      </CachedInfoProvider>
    );
  });
  it('renders correctly', () => {
    const { getByRole, getAllByRole } = mockPage;

    const titleElement = getByRole('title');
    const dateElement = getByRole('release-date');
    const sinopsisElement = getByRole('overview');
    const infoElement = getByRole('info-detail-row');
    const imageElement = getByRole('image');
    const tagsElement = getAllByRole('genres')[0];
    const approvalElement = getByRole('vote-average');

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(sinopsisElement).toBeInTheDocument();
    expect(infoElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(tagsElement).toBeInTheDocument();
    expect(approvalElement).toBeInTheDocument();
  });
});

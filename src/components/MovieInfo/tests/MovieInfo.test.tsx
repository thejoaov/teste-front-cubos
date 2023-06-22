import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MovieInfo, { MovieInfoProps } from '../index';

describe('MovieInfo component', () => {
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
    videos: { results: [] },
    vote_average: 7.5,
    vote_count: 100,
  };

  it('should render movie title', () => {
    render(<MovieInfo {...mockMovie} />);

    const title = screen.getByRole('title');
    expect(title).toHaveTextContent(mockMovie.original_title);
  });

  it('should render release date in correct format', () => {
    render(<MovieInfo {...mockMovie} />);

    const releaseDate = screen.getByRole('release-date');
    expect(releaseDate).toHaveTextContent('22/06/2023');
  });

  it('should render genres', () => {
    render(<MovieInfo {...mockMovie} />);

    const genres = screen.getAllByRole('movie-genre');
    expect(genres).toHaveLength(2);
    expect(genres[0]).toHaveTextContent('Action');
    expect(genres[1]).toHaveTextContent('Adventure');
  });
});

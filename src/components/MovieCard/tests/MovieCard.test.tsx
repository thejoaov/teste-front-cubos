import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import MovieCard, { MovieCardProps } from '../index';

const mockMovie: MovieCardProps = {
  movieName: 'Movie Name',
  movieImage: 'https://via.placeholder.com/300x450',
  movieDescription: 'Movie Description',
  movieReleaseDate: 'Movie Release Date',
  movieGenres: ['Action', 'Adventure'],
  movieVoteAverage: 10,
};

describe('MovieCard', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<MovieCard {...mockMovie} />);

    const nameElement = getByRole('movie-name');
    const imageElement = getByRole('movie-image');
    const descriptionElement = getByRole('movie-description');
    const releaseDateElement = getByRole('movie-release-date');
    const genresElement = getByRole('movie-genres');
    const voteAverageElement = getByRole('movie-vote-average');

    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(releaseDateElement).toBeInTheDocument();
    expect(genresElement).toBeInTheDocument();
    expect(voteAverageElement).toBeInTheDocument();
  });
});

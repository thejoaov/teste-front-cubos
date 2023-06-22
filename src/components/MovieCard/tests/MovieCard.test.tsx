import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import MovieCard, { MovieCardProps } from '../index';

const spyClick = vi.fn();

describe('MovieCard', () => {
  it('renders correctly', async () => {
    const mockMovie: MovieCardProps = {
      movieName: 'Movie Name',
      movieImage: 'https://via.placeholder.com/300x450',
      movieDescription: 'Movie Description',
      movieReleaseDate: '12-12-2020',
      movieGenres: ['Action', 'Adventure'],
      movieVoteAverage: 10,
      onClick: spyClick,
    };

    const { getByRole } = render(<MovieCard {...mockMovie} />);

    const cardElement = getByRole('movie-card');
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

    fireEvent.click(cardElement);

    await waitFor(() => {
      expect(spyClick).toHaveBeenCalled();
    });
  });
});

import React from 'react';
import { MovieCardContainer } from './styles';

export type MovieCardProps = {
  movieName: string;
  movieImage: string;
  movieDescription: string;
  movieReleaseDate: string;
  movieGenres: string[];
  movieVoteAverage: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  movieName,
  movieImage,
  movieDescription,
  movieReleaseDate,
  movieGenres,
  movieVoteAverage,
}) => {
  return (
    <MovieCardContainer>
      <img role="movie-image" src={movieImage} alt={movieName} />
      <div>
        <h2 role="movie-name">{movieName}</h2>
        <p role="movie-description">{movieDescription}</p>
        <p role="movie-release-date">{movieReleaseDate}</p>
        <p role="movie-genres">{movieGenres}</p>
        <p role="movie-vote-average">{movieVoteAverage}</p>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;

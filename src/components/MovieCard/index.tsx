import React from 'react';
import {
  MovieCardBody,
  MovieCardContainer,
  MovieCardFooter,
  MovieCardHeader,
  VoteAverage,
} from './styles';
import { formatDate } from '../../utils/formats';

export type MovieCardProps = {
  movieName: string;
  movieImage: string;
  movieDescription: string;
  movieReleaseDate: string;
  movieGenres: string[];
  movieVoteAverage: number;
  onClick?: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({
  movieName,
  movieImage,
  movieDescription,
  movieReleaseDate,
  movieGenres,
  movieVoteAverage,
  onClick,
}) => {
  return (
    <MovieCardContainer role="movie-card" onClick={onClick}>
      <img
        role="movie-image"
        src={movieImage}
        alt="Image not found"
        onError={(e) => {
          e.currentTarget.src =
            'https://via.placeholder.com/300x450.png?text=Image+not+found';
          e.currentTarget.alt = 'Image not found';
        }}
      />

      <div>
        <MovieCardHeader role="movie-name">
          <h2>{movieName}</h2>
          <p role="movie-release-date">{formatDate(movieReleaseDate)}</p>
        </MovieCardHeader>
        <VoteAverage role="movie-vote-average">
          {(movieVoteAverage * 10).toPrecision(2)}%
        </VoteAverage>

        <MovieCardBody>
          <p role="movie-description">{movieDescription}</p>
        </MovieCardBody>

        <MovieCardFooter role="movie-genres">
          {movieGenres.map((genre) => (
            <span key={genre} role="movie-genre">
              {genre}
            </span>
          ))}
        </MovieCardFooter>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;

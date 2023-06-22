import { MovieDetail } from '../../services/api/types';
import { formatCurrency, formatDate } from '../../utils/formats';
import { Content, Header, StyledMovieInfo } from './styles';

export type MovieInfoProps = {
  movie: MovieDetail;
};

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (
    <StyledMovieInfo role="movie-info">
      <Header>
        <h1 role="title">{movie.original_title}</h1>
        <span role="release-date">{formatDate(movie.release_date)}</span>
      </Header>

      <Content>
        <div id="details">
          <h2 role="overview-title">Sinopse</h2>
          <p role="overview">{movie.overview}</p>

          <h2 role="info-title">Informações</h2>

          <div role="info-detail-row">
            <div role="info-detail">
              <h3 role="genres">Situação</h3>
              <p role="info">{movie.status}</p>
            </div>
            <div role="info-detail">
              <h3 role="genres">Idioma</h3>
              <p role="info">{movie.original_language}</p>
            </div>
            <div role="info-detail">
              <h3 role="genres">Duração</h3>
              <p role="info">{movie.runtime} minutos</p>
            </div>
            <div role="info-detail">
              <h3 role="genres">Orçamento</h3>
              <p role="info">{formatCurrency(movie.budget)}</p>
            </div>
            <div role="info-detail">
              <h3 role="genres">Receita</h3>
              <p role="info">{formatCurrency(movie.revenue)}</p>
            </div>
            <div role="info-detail">
              <h3 role="genres">Lucro</h3>
              <p role="info">{formatCurrency(movie.revenue - movie.budget)}</p>
            </div>
          </div>

          <div role="footer">
            <div role="movie-genres">
              {movie.genres
                .map((item) => item.name)
                .map((genre) => (
                  <span key={genre} role="movie-genre">
                    {genre}
                  </span>
                ))}
            </div>
            <p role="vote-average">
              {(movie.vote_average * 10).toPrecision(2)}%
            </p>
          </div>
        </div>

        <img
          role="image"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="Image not found"
          onError={(e) => {
            e.currentTarget.src =
              'https://via.placeholder.com/300x450.png?text=Image+not+found';
            e.currentTarget.alt = 'Image not found';
          }}
        />
      </Content>
    </StyledMovieInfo>
  );
};

export default MovieInfo;

import { useLoaderData } from 'react-router-dom';
import { MovieDetail } from '../../services/api/types';

import MovieInfo from '../../components/MovieInfo';
import YoutubeVideo from '../../components/YoutubeVideo';

const Movie = () => {
  const movieData = useLoaderData() as MovieDetail;

  return (
    <div>
      <MovieInfo movie={movieData} />

      {movieData.videos.results.length ? (
        <YoutubeVideo videoId={movieData.videos.results[0].key} />
      ) : null}
    </div>
  );
};

export default Movie;

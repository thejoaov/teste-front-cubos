import { useLoaderData } from 'react-router-dom';
import { MovieDetail } from '../../services/api/types';

import MovieInfo from '../../components/MovieInfo';

const Movie = () => {
  const movieData = useLoaderData() as MovieDetail;

  return (
    <div>
      <MovieInfo movie={movieData} />

      <iframe
        // src={`https://www.youtube.com/embed/${movieData.videos.results[0].key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default Movie;

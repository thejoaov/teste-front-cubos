import { useLoaderData } from 'react-router-dom';
import { MovieDetail } from '../../services/api/types';

import MovieInfo from '../../components/MovieInfo';
import YoutubeVideo from '../../components/YoutubeVideo';
import useCachedInfo from '../../hooks/useCachedInfo';

const Movie = () => {
  const movieData = useLoaderData() as MovieDetail;

  const { getLanguageByName } = useCachedInfo();

  const getStatus = (status: string) => {
    const statusList: Record<string, string> = {
      Released: 'Lançado',
      Rumored: 'Rumor',
      'Post Production': 'Pós-produção',
      'In Production': 'Em produção',
      Planned: 'Planejado',
      Canceled: 'Cancelado',
      default: status,
    };

    return statusList[status || 'default'];
  };

  return (
    <div>
      <MovieInfo
        {...movieData}
        original_language={getLanguageByName(movieData.original_language)}
        status={getStatus(movieData.status)}
      />

      {movieData.videos.results.length ? (
        <YoutubeVideo videoId={movieData.videos.results[0].key} />
      ) : null}
    </div>
  );
};

export default Movie;

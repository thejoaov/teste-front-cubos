import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import Box from '../../components/Box';
import Page from '../../components/Page';
import SearchBox from '../../components/SearchBox';
import { Movie } from '../../services/api/types';
import { getMoviesByQuery } from '../../services/api';
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';
import useCachedInfo from '../../hooks/useCachedInfo';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { genres } = useCachedInfo();

  const handleGetCharacters = useCallback(
    async (req: { page: number; query: string }) => {
      try {
        setLoading(true);
        setPage(req.page);
        const response = await getMoviesByQuery(req);
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleSearch = useCallback(
    async (text: string, initialPage: number) => {
      await handleGetCharacters({ query: text, page: initialPage });
    },
    [handleGetCharacters]
  );

  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch]
  );

  useEffect(() => {
    if (search.length) {
      debouncedSearch(search, page);
    } else {
      setData(null);
    }
  }, [debouncedSearch, page, search]);

  const getGenres = useCallback(
    (ids: number[]) => {
      if (!genres) return [];
      return genres
        .filter((genre) => ids.includes(genre.id))
        .map((item) => item.name);
    },
    [genres]
  );

  return (
    <Page>
      <Box max-width="80vw" width="100%" mt={5} mb={4}>
        <SearchBox
          placeholder="Busque um filme por nome, ano ou gênero..."
          role="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Box>

      {loading ? (
        <Box>
          <Loader />
        </Box>
      ) : (
        <Box role="list">
          {data?.map((movie) => (
            <Box marginY="30px" width="90vw" key={movie.id}>
              <MovieCard
                movieDescription={movie.overview}
                movieGenres={
                  // TODO: Implement genres
                  getGenres(movie.genre_ids)
                }
                movieImage={`${import.meta.env.VITE_API_IMAGE_URL}${
                  movie.poster_path
                }`}
                movieName={movie.title}
                movieReleaseDate={movie.release_date}
                movieVoteAverage={movie.vote_average}
              />
            </Box>
          ))}
        </Box>
      )}
    </Page>
  );
};

export default Home;

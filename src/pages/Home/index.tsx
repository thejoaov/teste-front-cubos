import { useCallback, useEffect, useMemo, useState } from 'react';
import Box from '../../components/Box';
import Page from '../../components/Page';
import SearchBox from '../../components/SearchBox';
import { Movie } from '../../services/api/types';
import { getMoviesByQuery } from '../../services/api';
import { debounce } from 'lodash';
import Loader from '../../components/Loader';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleGetCharacters = useCallback(
    async (req: { page: number; query: string }) => {
      try {
        setLoading(true);
        setPage(req.page);
        const response = await getMoviesByQuery(req);
        setData(response.data.results);
      } catch (error) {
        console.log(error);
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

  return (
    <Page>
      <Box maxWidth="80vw" width="100%" mt={5} mb={4}>
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
            <p>{movie.title}</p>
          ))}
        </Box>
      )}
    </Page>
  );
};

export default Home;

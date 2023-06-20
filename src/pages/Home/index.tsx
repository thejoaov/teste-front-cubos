import Box from '../../components/Box';
import Page from '../../components/Page';
import SearchBox from '../../components/SearchBox';

const Home = () => {
  return (
    <Page>
      <Box maxWidth="80vw" width="100%" mt={5} mb={4}>
        <SearchBox
          placeholder="Busque um filme por nome, ano ou gênero..."
          role="search"
        />
      </Box>
      <div role="list">
        <div role="item">
          <h2 role="title">Film</h2>
          <h3 role="date">Date</h3>
          <h3 role="approval">99%</h3>
          <img
            role="image"
            src="https://via.placeholder.com/300x450"
            alt="Poster"
          />
          <p role="sinposis">Sinopsis</p>
          <div role="tags">
            <p>Tag 1</p>
            <p>Tag 2</p>
            <p>Tag 3</p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;

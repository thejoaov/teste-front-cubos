const Movie = () => {
  return (
    <div>
      <h1 role="title">Movie</h1>
      <h2 role="date">Date</h2>

      <p role="sinposis">Sinopsis</p>

      <div role="info">
        <p>Situação</p>
        <p>Idioma</p>
        <p>Duração</p>
        <p>Orçamento</p>
        <p>Receita</p>
        <p>Lucro</p>
      </div>

      <img
        role="image"
        src="https://via.placeholder.com/300x450"
        alt="Poster"
      />

      <div role="tags">
        <p>Tag 1</p>
        <p>Tag 2</p>
        <p>Tag 3</p>
      </div>

      <p role="approval">99%</p>
    </div>
  );
};

export default Movie;

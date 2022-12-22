export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ poster_path, title, id }) => (
        <li key={id}>
          <h2>{title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </li>
      ))}
    </ul>
  );
};

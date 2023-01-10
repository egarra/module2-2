import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ poster_path, title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <h2>{title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

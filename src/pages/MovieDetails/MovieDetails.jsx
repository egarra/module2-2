import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieById } from 'service/apiMovie';

export const MovieDetails = () => {
  const location = useLocation();

  const { idMovie } = useParams();
  console.log(idMovie);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(idMovie).then(data => {
      setMovie(data);
    });
  }, [idMovie]);
  if (!movie) {
    return;
  }
  return (
    <>
      <Link to={location.state?.from ?? '/trandingMovies'}>Go back</Link>
      <p>{movie.title}</p>
      <img
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
        alt={movie.title}
      />
    </>
  );
};

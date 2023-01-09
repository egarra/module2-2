import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { Clock } from 'components/Clock/Clock';

export const TrandingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <Clock />
      <MovieList movies={movies} />
    </>
  );
};

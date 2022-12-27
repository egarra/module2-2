import { useEffect, useState } from 'react';
import { getTrendingMovie, getMovieByQuery } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Clock } from 'components/Clock/Clock';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  useEffect(() => {
    getMovieByQuery(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  const onFormSubmit = query => {
    setQuery(query);
  };
  return (
    <>
      <Clock />
      <SearchForm onFormSubmit={onFormSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Clock } from 'components/Clock/Clock';

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
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
      <SearchForm onFormSubmit={onFormSubmit} btnText="Search" />
      <MovieList movies={movies} />
    </>
  );
};

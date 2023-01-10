import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { Clock } from 'components/Clock/Clock';

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    setSearchQuery(movieName);
    getMovieByQuery(movieName).then(({ results }) => {
      setMovies(results);
    });
  }, [movieName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <Clock />
      <form onSubmit={onFormSubmit}>
        <input
          name="name"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

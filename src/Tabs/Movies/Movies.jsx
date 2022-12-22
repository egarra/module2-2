import { Component } from 'react';
import { getTrendingMovie, getMovieByQuery } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Clock } from 'components/Clock/Clock';

export class Movies extends Component {
  state = {
    movies: [],
    query: '',
  };

  async componentDidMount() {
    const { results } = await getTrendingMovie();
    this.setState({ movies: results });
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      const { results } = await getMovieByQuery(this.state.query);
      this.setState({ movies: results });
    }
  }

  onFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Clock />
        <SearchForm onFormSubmit={this.onFormSubmit} />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

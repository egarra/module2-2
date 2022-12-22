import { Component } from 'react';
import { getTrendingMovie } from 'service/apiMovie';
import { MovieList } from 'components/MovieList/MovieList';

export class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { results } = await getTrendingMovie();
    this.setState({ movies: results });
    console.log(results);
  }

  render() {
    return <MovieList movies={this.state.movies} />;
  }
}

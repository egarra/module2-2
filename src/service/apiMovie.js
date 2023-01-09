import axios from 'axios';

const instanceMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '5ba51c2da469b356ab2a1378773a169b',
  }
});

export const getTrendingMovie = async () => {
  const {
    data
  } = await instanceMovie.get('/trending/all/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const {
    data
  } = await instanceMovie.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};


export const getMovieById = async movie_id => {
  const { data } = await instanceMovie.get(`/movie/${movie_id}`);    
  return data;
};

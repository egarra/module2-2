import axios from 'axios';
const API_KEY = '563492ad6f91700001000001c7cceb5e6e594b2da6acf55cddd5a656';
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  params: {
    orientation: 'landscape',
    per_page: 15,
  }
});

instance.defaults.headers.common['Authorization'] = API_KEY;


export const getImages = async (query, page) => {
  const {
    data
  } = await instance.get(`search?query=${query}&page=${page}`);

  return data;
};

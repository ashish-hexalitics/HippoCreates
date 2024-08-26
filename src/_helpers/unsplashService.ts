import axios from 'axios';

const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});

export const searchPhotos = (query:string, page:number = 1, perPage:number = 10) => {
  return unsplashApi.get('/search/photos', {
    params: { query, page, per_page: perPage }
  });
};

export const getRandomPhoto = () => {
  return unsplashApi.get('/photos/random');
};

import axios from 'axios';
import { LOADING } from './types';

export const getPeople = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get('https://swapi.co/api/people/')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getMovies = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get('https://swapi.co/api/films/')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => dispatch({ type: LOADING }));
};

import axios from 'axios';
import { LOADING, ERROR, SET_MOVIES } from './types';

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
    .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/films')
    .then(res => dispatch({ type: SET_MOVIES, payload: res.data.results }))
    .catch(err => dispatch({ type: ERROR, payload: err.response.data }))
    .finally(() => dispatch({ type: LOADING }));
};

import axios from 'axios';
import { toast } from 'react-toastify';

import { addMovieToLocalStorage } from '../utils';
import {
  LOADING,
  ERROR,
  SET_MOVIES,
  SELECT_MOVIE,
  SET_MOVIE,
  SET_CHARACTERS
} from './types';

export const getMovies = () => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/films')
    .then(res => dispatch({ type: SET_MOVIES, payload: res.data.results }))
    .catch(err => {
      if (err.response) {
        dispatch({ type: ERROR, payload: err.response.data.detail });
        toast.error(err.response.data.detail);
      } else {
        dispatch({ type: ERROR, payload: err.message });
        toast.error(err.message);
      }
    })
    .finally(() => dispatch({ type: LOADING }));
};

export const getMovie = movie_url => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .get(`https://cors-anywhere.herokuapp.com/${movie_url}`)
    .then(res => {
      dispatch(setMovie(res.data));
      dispatch(getCharacter(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch({ type: ERROR, payload: err.response.data.detail });
        toast.error(err.response.data.detail);
      } else {
        dispatch({ type: ERROR, payload: err.message });
        toast.error(err.message);
      }
    })
    .finally(() => dispatch({ type: LOADING }));
};

export const getCharacter = movie => dispatch => {
  const { characters } = movie;

  dispatch({ type: LOADING });
  return Promise.all(
    characters.map(url =>
      axios
        .get(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(data => data.data)
    )
  )
    .then(res => {
      addMovieToLocalStorage(movie, res);
      dispatch(setCharacters(res));
    })
    .catch(err => {
      if (err.response) {
        dispatch({ type: ERROR, payload: err.response.data.detail });
        toast.error(err.response.data.detail);
      } else {
        dispatch({ type: ERROR, payload: err.message });
        toast.error(err.message);
      }
    })
    .finally(() => dispatch({ type: LOADING }));
};

export const selectMovie = movie => {
  return { type: SELECT_MOVIE, payload: movie };
};

export const setCharacters = characters => {
  return { type: SET_CHARACTERS, payload: characters };
};

export const setMovie = movie => {
  return { type: SET_MOVIE, payload: movie };
};

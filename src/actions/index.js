import axios from 'axios';

import {
  LOADING,
  ERROR,
  SET_MOVIES,
  SELECT_MOVIE,
  SET_MOVIE,
  SET_CHARACTERS
} from './types';
import { toast } from 'react-toastify';

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
      dispatch({ type: SET_MOVIE, payload: res.data });
      dispatch(getCharacter(res.data.characters));
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

export const getCharacter = character_urls => dispatch => {
  dispatch({ type: LOADING });
  return Promise.all(
    character_urls.map(url =>
      axios
        .get(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(data => data.data)
    )
  )
    .then(res => dispatch(setCharacters(res)))
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

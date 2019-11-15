import { requestFromAPI } from '../utils';

import {
  addMovieDataToLocalStorage,
  addMovieListToLocalStorage
} from '../utils';
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

  return requestFromAPI('https://swapi.co/api/films', 'GET')
    .then(res => {
      addMovieListToLocalStorage(res.results);
      dispatch(setMovies(res.results));
    })
    .catch(err => {
      console.log(err);
      if (err.response) {
        dispatch({ type: ERROR, payload: err.response.data.detail });
        alert(err.response.data.detail);
      } else {
        dispatch({ type: ERROR, payload: err.message });
        alert(err.message);
      }
    })
    .finally(() => dispatch({ type: LOADING }));
};

export const getMovie = movie_url => dispatch => {
  dispatch({ type: LOADING });

  return requestFromAPI(movie_url, 'GET')
    .then(res => {
      dispatch(setMovie(res));
      dispatch(getCharacter(res));
    })
    .catch(err => {
      if (err.response) {
        dispatch({ type: ERROR, payload: err.response.data.detail });
        alert(err.response.data.detail);
      } else {
        dispatch({ type: ERROR, payload: err.message });
        alert(err.message);
      }
    })
    .finally(() => dispatch({ type: LOADING }));
};

export const getCharacter = movie => dispatch => {
  const { characters } = movie;

  dispatch({ type: LOADING });
  return Promise.all(
    characters.map(url => requestFromAPI(url, 'GET').then(data => data))
  )
    .then(res => {
      addMovieDataToLocalStorage(movie, res);
      dispatch(setCharacters(res));
    })
    .catch(err => {
      if (err.response) {
        dispatch({ type: ERROR, payload: err.response.data.detail });
        alert(err.response.data.detail);
      } else {
        dispatch({ type: ERROR, payload: err.message });
        alert(err.message);
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

export const setMovies = movies => {
  return { type: SET_MOVIES, payload: movies };
};

export const setMovie = movie => {
  return { type: SET_MOVIE, payload: movie };
};

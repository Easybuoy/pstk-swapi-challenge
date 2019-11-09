import {
  SET_MOVIES,
  SELECT_MOVIE,
  SET_MOVIE,
  SET_CHARACTERS
} from '../actions/types';

const initialState = {
  movies: [],
  movie: {},
  selectedMovie: '',
  characters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};

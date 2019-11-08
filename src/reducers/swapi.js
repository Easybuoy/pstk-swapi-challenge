import { SET_MOVIES, SELECT_MOVIE } from '../actions/types';

const initialState = {
  movies: [],
  selectedMovie: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    default:
      return state;
  }
};

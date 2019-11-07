import { SET_MOVIES } from '../actions/types';

const initialState = {
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

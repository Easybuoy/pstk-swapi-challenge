import { LOADING } from '../actions/types';

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

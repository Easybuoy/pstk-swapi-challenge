import errorReducer from '../reducers/error';
import { ERROR } from '../actions/types';

describe('errorReducer', () => {
  it('should return default state', () => {
    const INITIAL_STATE = {
      error: ''
    };
    const state = errorReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(INITIAL_STATE);
  });

  it('should set error state', () => {
    const action = {
      type: ERROR,
      payload: 'Network Error'
    };
    const state = errorReducer(undefined, action);
    expect(state).toEqual({
      error: action.payload
    });
  });
});

import loadingReducer from '../reducers/loading';
import { LOADING } from '../actions/types';

describe('loadingReducer', () => {
  it('should return default state', () => {
    const INITIAL_STATE = {
      loading: false
    };
    const state = loadingReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(INITIAL_STATE);
  });

  it('should set loading state', () => {
    const action = {
      type: LOADING
    };
    const state = loadingReducer(undefined, action);
    expect(state).toEqual({
      loading: true
    });
  });
});

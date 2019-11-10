import swapiReducer from '../reducers/swapi';
import {
  SET_MOVIES,
  SET_MOVIE,
  SELECT_MOVIE,
  SET_CHARACTERS
} from '../actions/types';

describe('swapiReducer', () => {
  it('should return default state', () => {
    const INITIAL_STATE = {
      movies: [],
      movie: {},
      selectedMovie: '',
      characters: []
    };
    const state = swapiReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(INITIAL_STATE);
  });

  it('should set movies', () => {
    const action = {
      type: SET_MOVIES,
      payload: [{ movie: 'Batman' }]
    };
    const state = swapiReducer(undefined, action);
    expect(state).toEqual({
      movies: action.payload,
      movie: {},
      selectedMovie: '',
      characters: []
    });
  });

  it('should set movie', () => {
    const action = {
      type: SET_MOVIE,
      payload: { movie: 'Batman' }
    };
    const state = swapiReducer(undefined, action);
    expect(state).toEqual({
      movies: [],
      movie: action.payload,
      selectedMovie: '',
      characters: []
    });
  });

  it('should select movie', () => {
    const action = {
      type: SELECT_MOVIE,
      payload: 'Batman'
    };
    const state = swapiReducer(undefined, action);
    expect(state).toEqual({
      movies: [],
      movie: {},
      selectedMovie: action.payload,
      characters: []
    });
  });

  it('should set characters', () => {
    const action = {
      type: SET_CHARACTERS,
      payload: [{ name: 'Bruce' }]
    };
    const state = swapiReducer(undefined, action);
    expect(state).toEqual({
      movies: [],
      movie: {},
      selectedMovie: '',
      characters: action.payload
    });
  });
});

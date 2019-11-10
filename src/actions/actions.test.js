import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { getMovies, getMovie, getCharacter, selectMovie } from './index';
import { LOADING, SELECT_MOVIE } from './types';
import mock from '../__mocks__/mock';

describe('Actions', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({});

  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it(`dispatches LOADING  when getMovies request is successful`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: mock.setCurrentUserMock }
      });
    });
    const expectedActions = [
      {
        type: LOADING
      }
    ];

    store.dispatch(getMovies());
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
    done();
  });

  it(`dispatches LOADING  when getmovie request is successful`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: mock.setCurrentUserMock }
      });
    });
    const expectedActions = [
      {
        type: LOADING
      }
    ];
    store.dispatch(getMovie('google.com'));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
    done();
  });

  it(`dispatches LOADING  when getCharacter request is successful`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: mock.setCurrentUserMock }
      });
    });
    const expectedActions = [
      {
        type: LOADING
      }
    ];
    store.dispatch(getCharacter([]));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
    done();
  });

  it(`dispatches LOADING  when getCharacter request is successful`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: mock.setCurrentUserMock }
      });
    });
    const expectedActions = [
      {
        type: SELECT_MOVIE,
        payload: []
      }
    ];
    store.dispatch(selectMovie([]));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
});

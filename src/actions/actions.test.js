import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { getMovies, getMovie, getCharacter, selectMovie } from './index';
import {
  LOADING,
  SELECT_MOVIE,
  SET_MOVIE,
  ERROR,
  SET_CHARACTERS
} from './types';
import mock from '../__mocks__/mock';

describe('Actions', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ movies: [] });

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

  it(`dispatches getMovie Error when request fails`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { data: mock.getErrorsMock }
      });
    });
    const expectedActions = [
      {
        type: LOADING
      },
      {
        type: SET_MOVIE,
        payload: { data: undefined }
      },
      {
        type: LOADING
      },
      {
        type: ERROR,
        payload: "Cannot read property 'map' of undefined"
      },
      {
        type: LOADING
      }
    ];
    const store = mockStore({});
    return store.dispatch(getMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
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

  it(`dispatches getCharacter Error when request fails`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { data: mock.getErrorsMock }
      });
    });
    const expectedActions = [
      {
        type: LOADING
      },
      {
        payload: [
          {
            data: undefined
          }
        ],
        type: SET_CHARACTERS
      },
      {
        type: LOADING
      }
    ];
    const store = mockStore({});
    return store.dispatch(getCharacter([''])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
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

  it(`dispatches getMovies Error when request fails`, done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { data: mock.getErrorsMock }
      });
    });
    const expectedActions = [
      {
        type: LOADING
      },
      {
        type: ERROR,
        payload: undefined
      },
      {
        type: LOADING
      }
    ];
    const store = mockStore({});
    return store.dispatch(getMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

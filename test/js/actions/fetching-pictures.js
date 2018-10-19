import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import * as actions from '../../../src/js/actions';
import * as types from '../../../src/js/constants/action-types';

import photos from '../success-response.json';
import failure from '../failure-response.json';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('FETCH_PICTURES actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_PICTURES_SUCCESS when fetching todos has been done', () => {
    fetchMock
      .getOnce(
        'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=undefined&text=test&format=json&nojsoncallback=1',
        photos,
      );


    const expectedActions = [
      { type: types.FETCH_PICTURES_REQUEST },
      { type: types.FETCH_PICTURES_SUCCESS, body: { ...photos } },
    ];
    const store = mockStore({
      items: [],
      selected: null,
      isFetching: false,
      error: undefined,
      isError: false,
    });

    return store.dispatch(actions.fetchPictures('test')).then(() => {
      expect(store.getActions()).to.eql(expectedActions);
    });
  });

  it('creates FETCH_PICTURES_ERROR when fetching todos failed', () => {
    fetchMock
      .getOnce(
        'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=undefined&text=test&format=json&nojsoncallback=1',
        failure,
      );


    const expectedActions = [
      { type: types.FETCH_PICTURES_REQUEST },
      {
        type: types.FETCH_PICTURES_ERROR,
        error: failure.message,
      },
    ];
    const store = mockStore({
      items: [],
      selected: null,
      isFetching: false,
      error: undefined,
      isError: false,
    });

    return store.dispatch(actions.fetchPictures('test')).then(() => {
      expect(store.getActions()).to.eql(expectedActions);
    });
  });
});

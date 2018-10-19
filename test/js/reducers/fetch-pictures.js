import { expect } from 'chai';
import reducer from '../../../src/js/reducers';
import * as types from '../../../src/js/constants/action-types';

import pics from '../success-response.json';
import failure from '../failure-response.json';

describe('FETCH_PICTURES reducers', () => {
  it('should handle FETCH_PICTURES_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_PICTURES_REQUEST,
      }),
    ).to.eql(
      {
        pictures: {
          items: [],
          selected: null,
          isFetching: true,
          error: undefined,
          isError: false,
        },
      },
    );
  });

  it('should handle FETCH_PICTURES_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_PICTURES_REQUEST,
      }),
    ).to.eql(
      {
        pictures: {
          items: [],
          selected: null,
          isFetching: true,
          error: undefined,
          isError: false,
        },
      },
    );

    expect(
      reducer({}, {
        type: types.FETCH_PICTURES_SUCCESS,
        body: pics,
      }),
    ).to.eql(
      {
        pictures: {
          items: pics.photos.photo,
          selected: 0,
          isFetching: false,
          error: undefined,
          isError: false,
        },
      },
    );
  });

  it('should handle FETCH_PICTURES_ERROR', () => {
    expect(
      reducer({}, {
        type: types.FETCH_PICTURES_REQUEST,
      }),
    ).to.eql(
      {
        pictures: {
          items: [],
          selected: null,
          isFetching: true,
          error: undefined,
          isError: false,
        },
      },
    );

    expect(
      reducer({}, {
        type: types.FETCH_PICTURES_ERROR,
        error: failure.message,
      }),
    ).to.eql(
      {
        pictures: {
          items: [],
          selected: null,
          isFetching: false,
          error: failure.message,
          isError: true,
        },
      },
    );
  });
});

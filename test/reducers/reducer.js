import { expect } from 'chai';
import reducer from '../../src/js/reducers';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql(
      {
        pictures: {
          items: [],
          selected: null,
          isFetching: false,
          error: undefined,
          isError: false,
        },
      },
    );
  });
});

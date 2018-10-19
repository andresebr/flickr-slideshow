import { expect } from 'chai';
import * as actions from '../../../src/js/actions';
import * as types from '../../../src/js/constants/action-types';

describe('SELECT actions', () => {
  it('should create SELECT_PICTURE action', () => {
    const pictureId = 'testId';

    const expectedAction = {
      type: types.SELECT_PICTURE,
      payload: pictureId,
    };
    expect(actions.selectPicture(pictureId)).to.eql(expectedAction);
  });

  it('should create SELECT_NEXT_PICTURE action', () => {
    const expectedAction = {
      type: types.SELECT_NEXT_PICTURE,
    };
    expect(actions.selectNextPicture()).to.eql(expectedAction);
  });

  it('should create SELECT_PREVIOUS_PICTURE action', () => {
    const expectedAction = {
      type: types.SELECT_PREVIOUS_PICTURE,
    };
    expect(actions.selectPreviousPicture()).to.eql(expectedAction);
  });
});

import { combineReducers } from 'redux';
import { FETCH_PICTURES_REQUEST, FETCH_PICTURES_ERROR, FETCH_PICTURES_SUCCESS } from '../constants/action-types';

const initialState = {
  items: [],
  isFetching: false,
  error: undefined,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_PICTURES_SUCCESS:
      return Object.assign({}, state, { isFetching: false, items: action.photo });
    case FETCH_PICTURES_ERROR:
      return Object.assign({}, state, { isFetching: false, error: action.error });
    default:
      return state;
  }
};

export default combineReducers({ pictures: rootReducer });

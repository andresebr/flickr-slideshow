import { combineReducers } from 'redux';
import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_ERROR,
  FETCH_PICTURES_SUCCESS,
  SELECT_PICTURE,
  SELECT_NEXT_PICTURE,
  SELECT_PREVIOUS_PICTURE,
} from '../constants/action-types';

const initialState = {
  items: [],
  selected: null,
  isFetching: false,
  error: undefined,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_PICTURES_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          items: action.body.photos.photo,
          selected: 0,
        },
      );
    case FETCH_PICTURES_ERROR:
      return Object.assign({}, state, { isFetching: false, error: action.error });
    case SELECT_PICTURE:
      return Object.assign(
        {},
        state,
        { selected: state.items.findIndex(obj => obj.id === action.payload) },
      );
    case SELECT_NEXT_PICTURE:
      return Object.assign(
        {},
        state,
        {
          selected: state.selected === state.items.length - 1
            ? state.selected : state.selected + 1,
        },
      );
    case SELECT_PREVIOUS_PICTURE:
      return Object.assign(
        {},
        state,
        {
          selected: state.selected === 0
            ? state.selected : state.selected - 1,
        },
      );
    default:
      return state;
  }
};

export default combineReducers({ pictures: rootReducer });

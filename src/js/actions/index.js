import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_ERROR,
  SELECT_PICTURE,
  SELECT_NEXT_PICTURE,
  SELECT_PREVIOUS_PICTURE,
} from '../constants/action-types';

function fetchPicturesRequest() {
  return {
    type: FETCH_PICTURES_REQUEST,
  };
}

function fetchPicturesSuccess(body) {
  return {
    type: FETCH_PICTURES_SUCCESS,
    body,
  };
}

function fetchPicturesError(error) {
  return {
    type: FETCH_PICTURES_ERROR,
    error,
  };
}

export const fetchPictures = searchString => (dispatch) => {
  dispatch(fetchPicturesRequest());
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&text=${searchString}&format=json&nojsoncallback=1`)
    .then(response => response.json().then(body => ({ response, body })))
    .then(({ response, body }) => {
      if (body.stat === 'fail' || !response.ok) {
        dispatch(fetchPicturesError(body.message));
      } else {
        dispatch(fetchPicturesSuccess(body));
      }
    });
};

export const selectPicture = pictureId => ({ type: SELECT_PICTURE, payload: pictureId });

export const selectNextPicture = () => ({ type: SELECT_NEXT_PICTURE });

export const selectPreviousPicture = () => ({ type: SELECT_PREVIOUS_PICTURE });

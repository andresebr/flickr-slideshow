import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_ERROR,
} from '../constants/action-types';

export const fetchPictures = searchString => (dispatch) => {
  dispatch({ type: FETCH_PICTURES_REQUEST });
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&text=${searchString}&format=json&nojsoncallback=1`)
    .then(response => response.json().then(body => ({ response, body })))
    .then(({ response, body }) => {
      if (body.stat === 'fail' || !response.ok) {
        dispatch({
          type: FETCH_PICTURES_ERROR,
          error: body.message,
        });
      } else {
        dispatch({ type: FETCH_PICTURES_SUCCESS, ...body.photos });
      }
    });
};

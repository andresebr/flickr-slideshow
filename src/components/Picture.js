import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import NavigationArrow from './NavigationArrow';


const Picture = ({ pictures, ...props }) => {
  const {
    items, selected, isFetching, isError, error,
  } = pictures;

  if (items.length === 0) {
    return (
      <div className="picture-container">
        <div className="message">
          <FontAwesomeIcon icon={faCoffee} />
          {' '}
          Nothing to show here
        </div>
      </div>
    );
  }

  if (isFetching) {
    return (<div className="picture-container">Loading stuff</div>);
  }

  if (isError) {
    return (
      <div className="picture-container">
        {error || 'Something went wrong'}
      </div>
    );
  }

  const picture = items[selected];
  const {
    farm,
    server,
    id,
    secret,
  } = picture;

  const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return (
    <div className="picture-container">
      <NavigationArrow type="left" pictures {...props} />
      <div className="selected-picture">
        <img alt={picture.id} title={picture.title} src={url} />
        <div className="caption">
          <p>{picture.title}</p>
        </div>
      </div>
      <NavigationArrow type="right" pictures {...props} />
    </div>
  );
};

Picture.propTypes = {
  pictures:
    PropTypes.shape(
      {
        items: PropTypes.arrayOf(PropTypes.shape()),
        selected: PropTypes.number,
        isFetching: PropTypes.bool,
        error: PropTypes.string,
        isError: PropTypes.bool,
      },
    ).isRequired,
};

export default Picture;

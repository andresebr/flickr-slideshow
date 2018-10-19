import React from 'react';
import PropTypes from 'prop-types';
import NavigationArrow from './NavigationArrow';


const Picture = ({ pictures, ...props }) => {
  const { items, selected, isFetching } = pictures;

  if (items.length === 0) {
    return (<div className="picture-container">Nothing to show here</div>);
  }

  if (isFetching) {
    return (<div className="picture-container">Loading stuff</div>);
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
      <img alt={picture.id} title={picture.title} src={url} />
      <NavigationArrow type="right" pictures {...props} />
    </div>
  );
};

Picture.propTypes = {
  selectedImg: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Picture;

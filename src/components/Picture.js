import React from 'react';
import PropTypes from 'prop-types';
import NavigationArrow from './NavigationArrow';


const Picture = ({ selectedImg, ...props }) => {
  const { id, title, url } = selectedImg;

  return (
    <div className="picture-container">
      <NavigationArrow type="left" {...props} />
      <img alt={id} title={title} src={url} />
      <NavigationArrow type="right" {...props} />
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

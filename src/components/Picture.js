import React from 'react';
import PropTypes from 'prop-types';
import NavigationArrow from './NavigationArrow';


const Picture = ({ selectedImg, pictures, ...props }) => {
  if (!selectedImg || !pictures || pictures.items.length === 0) {
    return (<div className="picture-container">Nothing to show here</div>);
  }

  if (pictures && pictures.isFetching) {
    return (<div className="picture-container">Loading stuff</div>);
  }

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

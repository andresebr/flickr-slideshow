import React from 'react';
import PropTypes from 'prop-types';
import TeaserBox from './TeaserBox';


const PictureSelector = ({ pictures, selectedImg, ...props }) => {
  if (!pictures || pictures.items.length === 0) {
    return (
      <div className="selector-container">
        Nothing to show here
      </div>
    );
  }

  if (pictures && pictures.isFetching) {
    return (
      <div className="selector-container">
        Loading stuff
      </div>
    );
  }

  const thumbs = pictures.items.map(
    image => (
      <TeaserBox
        key={`${image.id}-${image.title}`}
        selected={selectedImg && image.id === selectedImg.id}
        {...image}
        {...props}
      />
    ),
  );

  return (
    <div className="selector-container">
      {thumbs}
    </div>
  );
};

PictureSelector.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
  selectedImg: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    },
  ).isRequired,
};


export default PictureSelector;

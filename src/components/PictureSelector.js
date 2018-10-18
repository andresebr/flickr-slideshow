import React from 'react';
import PropTypes from 'prop-types';
import TeaserBox from './TeaserBox';


const PictureSelector = ({ items, selectedImg, ...props }) => {
  const { id } = selectedImg;

  const thumbs = items.map(
    image => <TeaserBox key={`${image.id}-${image.title}`} selected={image.id === id} {...image} {...props} />,
  );

  return (
    <div className="selector-container">
      {thumbs}
    </div>
  );
};

PictureSelector.propTypes = {
  items: PropTypes.arrayOf(
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

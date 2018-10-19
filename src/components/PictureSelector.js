import React from 'react';
import PropTypes from 'prop-types';
import TeaserBox from './TeaserBox';


const PictureSelector = ({ pictures, ...props }) => {
  const { items, selected, isFetching } = pictures;

  if (items.length === 0) {
    return (
      <div className="selector-container">
        Nothing to show here
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="selector-container">
        Loading stuff
      </div>
    );
  }

  const thumbs = items.map(
    (image, i) => (
      <TeaserBox
        key={`${image.id}-${image.secret}`}
        isSelected={i === selected}
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

import React from 'react';
import PropTypes from 'prop-types';
import TeaserBox from './TeaserBox';


const PictureSelector = ({ pictures, ...props }) => {
  const {
    items,
    selected,
    isFetching,
    isError,
  } = pictures;

  if (items.length === 0 || isFetching || isError) {
    return null;
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


export default PictureSelector;

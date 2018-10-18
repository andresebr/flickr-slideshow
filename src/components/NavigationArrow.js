import React from 'react';
import PropTypes from 'prop-types';


const NavigationArrow = ({ type, handleLeftArrowClick, handleRightArrowClick }) => (
  <div className={`${type}-arrow`}>
    <button
      type="button"
      onClick={type === 'left'
        ? () => handleLeftArrowClick()
        : () => handleRightArrowClick()}
    >
      {type === 'left' ? '<' : '>'}
    </button>
  </div>
);

NavigationArrow.propTypes = {
  type: PropTypes.string.isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
};

export default NavigationArrow;

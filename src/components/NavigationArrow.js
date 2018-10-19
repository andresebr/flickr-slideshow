import React from 'react';
import PropTypes from 'prop-types';


const NavigationArrow = ({ type, handleLeftArrowClick, handleRightArrowClick }) => (
  <button
    type="button"
    className={`nav ${type}-arrow`}
    onClick={type === 'left'
      ? () => handleLeftArrowClick()
      : () => handleRightArrowClick()}
  >
    {type === 'left' ? '<' : '>'}
  </button>
);

NavigationArrow.propTypes = {
  type: PropTypes.string.isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
};

export default NavigationArrow;

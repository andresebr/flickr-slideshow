import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const NavigationArrow = ({ type, handleLeftArrowClick, handleRightArrowClick }) => (
  <button
    type="button"
    className={`nav-btn ${type}-arrow`}
    onClick={type === 'left'
      ? () => handleLeftArrowClick()
      : () => handleRightArrowClick()}
  >
    {type === 'left' ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
  </button>
);

NavigationArrow.propTypes = {
  type: PropTypes.string.isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
};

export default NavigationArrow;

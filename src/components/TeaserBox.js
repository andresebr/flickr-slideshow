import React from 'react';
import PropTypes from 'prop-types';

const TeaserBox = ({
  farm,
  server,
  id,
  secret,
  title,
  isSelected,
  handleTeaserBoxClick,
  handleTeaserKeyUp,
}) => {
  const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return (
    <div
      className={isSelected ? 'thumbnail-container highlight' : 'thumbnail-container'}
      onClick={() => handleTeaserBoxClick(id)}
      onKeyPress={e => handleTeaserKeyUp(e, id)}
      role="button"
      tabIndex="0"
    >
      <img alt={id} title={title} src={url} />
    </div>
  );
};

TeaserBox.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleTeaserBoxClick: PropTypes.func.isRequired,
  handleTeaserKeyUp: PropTypes.func.isRequired,
};

export default TeaserBox;

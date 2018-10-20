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
  handleTeaserKeyPress,
}) => {
  const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return (
    <div
      className={isSelected ? 'thumbnail-container highlight' : 'thumbnail-container'}
      onClick={() => handleTeaserBoxClick(id)}
      onKeyPress={e => handleTeaserKeyPress(e, id)}
      role="button"
      tabIndex="0"
    >
      <img alt={id} title={title} src={url} />
    </div>
  );
};

TeaserBox.propTypes = {
  id: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  farm: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleTeaserBoxClick: PropTypes.func.isRequired,
  handleTeaserKeyPress: PropTypes.func.isRequired,
};

export default TeaserBox;

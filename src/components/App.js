import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from './Search';
import Picture from './Picture';
import PictureSelector from './PictureSelector';
import {
  fetchPictures,
  selectPicture,
  selectNextPicture,
  selectPreviousPicture,
} from '../js/actions/index';

import '../styles/app.scss';

const mapStateToProps = state => ({ pictures: state.pictures });

const mapDispatchToProps = dispatch => ({
  fetch: searchString => dispatch(fetchPictures(searchString)),
  select: pictureId => dispatch(selectPicture(pictureId)),
  selectNext: () => dispatch(selectNextPicture()),
  selectPrevious: () => dispatch(selectPreviousPicture()),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleSearchInputChange = (e) => {
    const { fetch } = this.props;

    this.setState({ searchValue: e.target.value });
    fetch(e.target.value);
  }

  handleTeaserBoxClick = (imageId) => {
    const { select } = this.props;

    select(imageId);
  }

  handleLeftArrowClick = () => {
    const { selectPrevious } = this.props;

    selectPrevious();
  }

  handleRightArrowClick = () => {
    const { selectNext } = this.props;

    selectNext();
  }

  handleTeaserKeyPress = (e, imageId) => {
    e.preventDefault();

    const code = (e.keycode ? e.keycode : e.which);

    // Enter key.
    if (code === 13) {
      this.handleTeaserBoxClick(imageId);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="topnav">
          <Search
            handleSearchInputChange={this.handleSearchInputChange}
            {...this.props}
            {...this.state}
          />
        </div>
        <div className="picture-section">
          <Picture
            handleLeftArrowClick={this.handleLeftArrowClick}
            handleRightArrowClick={this.handleRightArrowClick}
            {...this.props}
            {...this.state}
          />
        </div>
        <div className="preview-section">
          <PictureSelector
            handleTeaserBoxClick={this.handleTeaserBoxClick}
            handleTeaserKeyPress={this.handleTeaserKeyPress}
            {...this.props}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
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
  fetch: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  selectNext: PropTypes.func.isRequired,
  selectPrevious: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

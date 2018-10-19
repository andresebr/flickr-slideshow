import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  handleTeaserKeyUp = (e, imageId) => {
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
            handleTeaserKeyUp={this.handleTeaserKeyUp}
            {...this.props}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

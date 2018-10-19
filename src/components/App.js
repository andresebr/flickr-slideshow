import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import Picture from './Picture';
import PictureSelector from './PictureSelector';

import '../styles/base.scss';

const mapStateToProps = state => ({ pictures: state.pictures });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImg: null,
    };
  }

  handleTeaserBoxClick = (imageId) => {
    this.setState(props => ({
      selectedImg: props.pictures.find(obj => obj.id === imageId),
    }));
  }

  handleLeftArrowClick = () => {
    const { selectedImg } = this.state;
    const { pictures } = this.props;

    const imgIndex = pictures.findIndex(obj => obj.id === selectedImg.id);

    if (imgIndex === 0) {
      this.setState(props => ({
        selectedImg: props.pictures[props.pictures.length - 1],
      }));
    } else {
      this.setState(props => ({
        selectedImg: props.pictures[imgIndex - 1],
      }));
    }
  }

  handleRightArrowClick = () => {
    const { selectedImg } = this.state;
    const { pictures } = this.props;

    const imgIndex = pictures.findIndex(obj => obj.id === selectedImg.id);

    if (imgIndex === pictures.length - 1) {
      this.setState(props => ({
        selectedImg: props.pictures[0],
      }));
    } else {
      this.setState(props => ({
        selectedImg: props.pictures[imgIndex + 1],
      }));
    }
  }

  handleTeaserKeyUp = (e, imageId) => {
    e.preventDefault();

    const code = (e.keycode ? e.keycode : e.which);

    // Enter
    if (code === 13) {
      this.handleTeaserBoxClick(imageId);
    }
  }

  render() {
    return (
      <div>
        <Search />
        <Picture
          handleLeftArrowClick={this.handleLeftArrowClick}
          handleRightArrowClick={this.handleRightArrowClick}
          {...this.props}
          {...this.state}
        />
        <PictureSelector
          handleTeaserBoxClick={this.handleTeaserBoxClick}
          handleTeaserKeyUp={this.handleTeaserKeyUp}
          {...this.props}
          {...this.state}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

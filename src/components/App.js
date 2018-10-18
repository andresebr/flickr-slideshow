import React, { Component } from 'react';

import Search from './Search';
import Picture from './Picture';
import PictureSelector from './PictureSelector';

import '../styles/base.scss';

const images = [
  { id: '1', title: 'placheolder 1', url: 'https://via.placeholder.com/250x250' },
  { id: '2', title: 'placheolder 2', url: 'https://via.placeholder.com/300x250' },
  { id: '3', title: 'placheolder 4', url: 'https://via.placeholder.com/150x250' },
  { id: '4', title: 'placheolder 5', url: 'https://via.placeholder.com/250x300' },
  { id: '5', title: 'placheolder 6', url: 'https://via.placeholder.com/250x150' }];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: images,
      selectedImg: images[0],
    };
  }

  handleTeaserBoxClick = (imageId) => {
    this.setState(state => ({
      selectedImg: state.items.find(obj => obj.id === imageId),
    }));
  }

  handleLeftArrowClick = () => {
    const { items, selectedImg } = this.state;

    const imgIndex = items.findIndex(obj => obj.id === selectedImg.id);

    if (imgIndex === 0) {
      this.setState(state => ({
        selectedImg: state.items[state.items.length - 1],
      }));
    } else {
      this.setState(state => ({
        selectedImg: state.items[imgIndex - 1],
      }));
    }
  }

  handleRightArrowClick = () => {
    const { items, selectedImg } = this.state;

    const imgIndex = items.findIndex(obj => obj.id === selectedImg.id);

    if (imgIndex === items.length - 1) {
      this.setState(state => ({
        selectedImg: state.items[0],
      }));
    } else {
      this.setState(state => ({
        selectedImg: state.items[imgIndex + 1],
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
          {...this.state}
        />
        <PictureSelector
          handleTeaserBoxClick={this.handleTeaserBoxClick}
          handleTeaserKeyUp={this.handleTeaserKeyUp}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;

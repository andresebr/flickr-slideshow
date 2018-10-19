import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { fetchPictures } from '../js/actions/index';

const mapDispatchToProps = dispatch => ({
  fetchPictures: searchString => dispatch(fetchPictures(searchString)),
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleInputChange = (e) => {
    this.props.fetchPictures(e.target.value);
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div className="topnav">
        <DebounceInput
          className="search"
          type="text"
          placeholder="Search..."
          name="search"
          value={searchValue}
          debounceTimeout={300}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Search);

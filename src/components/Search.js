import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const Search = ({ searchValue, handleSearchInputChange }) => (
  <DebounceInput
    className="search-box"
    type="text"
    placeholder="Search..."
    name="search"
    value={searchValue}
    debounceTimeout={400}
    onChange={e => handleSearchInputChange(e)}
  />
);

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
};


export default Search;

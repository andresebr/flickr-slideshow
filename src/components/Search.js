import React from 'react';
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

export default Search;

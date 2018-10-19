import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const Search = ({ searchValue, handleSearchInputChange }) => (
  <div className="topnav">
    <DebounceInput
      className="search"
      type="text"
      placeholder="Search..."
      name="search"
      value={searchValue}
      debounceTimeout={300}
      onChange={e => handleSearchInputChange(e)}
    />
  </div>
);

export default Search;

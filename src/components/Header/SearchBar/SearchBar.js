import React from "react";
import SearchBarStyles from './SearchBar.module.css';

const SearchBar = (searchText, setSearchText) => {
  return <input type="text" className={SearchBarStyles.searchBar} placeholder="Search" value={searchText}/>;
};

export default SearchBar;

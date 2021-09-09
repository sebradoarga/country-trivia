import React from "react";
import SearchBarStyles from './SearchBar.module.css';

const SearchBar = () => {
  return <input type="text" className={SearchBarStyles.searchBar} placeholder="Search" />;
};

export default SearchBar;

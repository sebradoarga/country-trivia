import React from "react";
import SearchBarStyles from "./SearchBar.module.css";

const SearchBar = ({
  searchText,
  setSearchText,
}) => {
  return (
    <input
      type="text"
      className={SearchBarStyles.searchBar}
      placeholder="Search"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;

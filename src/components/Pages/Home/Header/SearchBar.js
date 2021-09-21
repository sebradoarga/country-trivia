import React from "react";
import styled from "styled-components";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <Search
      type="text"
      placeholder="Search"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

const Search = styled.input`
  margin: 0 10rem;
  height: 4rem;
  width: 27rem;
  padding-left: 1rem;
  font-size: 1.8rem;
  border-radius: 5px;
  display: none;

  &:focus {
    outline: none;
  }
`;

export default SearchBar;

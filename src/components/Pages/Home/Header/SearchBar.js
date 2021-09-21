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
  margin: 2rem 0;
  height: 5.5rem;
  width: 57rem;
  padding-left: 1rem;
  font-size: 2.8rem;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export default SearchBar;

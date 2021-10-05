import React from "react";
import styled from "styled-components";

const SearchBar = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: any;
}) => {
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
  height: 5.5rem;
  width: 57rem;
  padding-left: 1rem;
  font-size: 2.8rem;
  border: none;
  padding-top: 0.8rem;

  &:focus {
    outline: none;
  }
`;

export default SearchBar;

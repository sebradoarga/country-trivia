import React from "react";
import styled from "styled-components";
import { device } from "../../../device";

const SearchBar = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
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
  padding-left: 1rem;
  font-size: 2.8rem;
  border: none;
  padding-top: 0.8rem;
  z-index: 3;

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    width: 50rem;
  }
`;

export default SearchBar;

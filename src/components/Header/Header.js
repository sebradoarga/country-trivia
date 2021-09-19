import React from "react";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";
import styled from "styled-components";

const Header = ({ searchText, setSearchText }) => {
  return (
    <HeaderTag>
      <ThemeButton />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Cart />
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export default Header;

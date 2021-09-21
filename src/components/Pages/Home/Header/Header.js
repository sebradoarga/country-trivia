import React from "react";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";
import styled from "styled-components";
import Hero from "./Hero";

const Header = ({ searchText, setSearchText, setExpanded }) => {
  return (
    <HeaderTag className="home-header">
      <Navbar>
        <ThemeButton />
        <Cart setExpanded={setExpanded} />
      </Navbar>
      <Hero />
      <Wrapper>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </Wrapper>
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 45rem;
`;

const Navbar = styled.nav`
  background: transparent;
  padding: 3rem 0 0 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

export default Header;

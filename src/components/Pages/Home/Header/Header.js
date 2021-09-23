import React from "react";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";
import styled from "styled-components";
import Hero from "./Hero";
import { FaSearch } from "react-icons/fa";

const Header = ({ searchText, setSearchText, setExpanded }) => {
  return (
    <HeaderTag className="home-header">
      <Navbar>
        <ThemeButton />
        <Cart setExpanded={setExpanded} />
      </Navbar>
      <Hero />
      <Wrapper>
        <FaSearch
          style={{ fontSize: "2.8rem", marginLeft: "1rem", color: "#222" }}
        />
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
`;

const Navbar = styled.nav`
  background: transparent;
  padding: 3rem 0 0 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background: white;
  border: 2px solid #222;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export default Header;

import React from "react";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";
import styled from "styled-components";
import Hero from "./Hero";
import { FaSearch } from "react-icons/fa";
import { device } from "../../../device";

const Header = ({
  searchText,
  setSearchText,
  setExpanded,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const iconStyling = {
    fontSize: "2.8rem",
    marginLeft: "1rem",
    color: "#222",
  };

  return (
    <HeaderTag className="home-header">
      <Navbar>
        <ThemeButton />
        <Cart setExpanded={setExpanded} />
      </Navbar>
      <Hero />
      <Wrapper>
        <FaSearch style={iconStyling} />
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
  padding: 3rem 2rem 0 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${device.mobileL} {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media ${device.tablet} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media ${device.laptop} {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media ${device.laptopL} {
    padding-left: 9rem;
    padding-right: 9rem;
  }
`;

const Wrapper = styled.div`
  background: white;
  border: 2px solid #222;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  z-index: 3;
`;

export default Header;

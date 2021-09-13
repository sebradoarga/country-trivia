import React from "react";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
import ThemeButton from "./ThemeButton/ThemeButton";
import HeaderStyles from "./Header.module.css";

const Header = ({ searchText, setSearchText }) => {
  return (
    <header className={HeaderStyles.header}>
      <ThemeButton />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Cart />
    </header>
  );
};

export default Header;

import React from "react";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar/SearchBar";
import ThemeButton from "./ThemeButton/ThemeButton";
import HeaderStyles from './Header.module.css';

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <ThemeButton />
      <SearchBar />
      <Cart />
    </header>
  );
};

export default Header;

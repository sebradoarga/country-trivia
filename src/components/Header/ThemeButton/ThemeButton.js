import React from "react";
import { FaMoon } from "react-icons/fa";
import ThemeButtonStyles from "./ThemeButton.module.css";

const ThemeButton = () => {
  return (
    <button className={ThemeButtonStyles.themeBtn} aria-label="theme button">
      <FaMoon />
    </button>
  );
};

export default ThemeButton;

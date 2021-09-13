import React from "react";
import { FaMoon } from "react-icons/fa";
import ThemeButtonStyles from "./ThemeButton.module.css";

const ThemeButton = () => {
  return (
    <button className={ThemeButtonStyles.themeBtn}>
      <FaMoon />
    </button>
  );
};

export default ThemeButton;

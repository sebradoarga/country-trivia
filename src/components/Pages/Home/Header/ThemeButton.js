import React from "react";
import { FaMoon } from "react-icons/fa";
import style from "styled-components";

const ThemeButton = () => {
  return (
    <Button aria-label="theme button">
      <FaMoon />
    </Button>
  );
};

const Button = style.button`
  margin: 0 10rem;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #4C9757;
  transition: all 0.1s ease-in-out;

  &:hover {
      color: #4c9757cb;
      cursor: pointer;

  }
`;

export default ThemeButton;

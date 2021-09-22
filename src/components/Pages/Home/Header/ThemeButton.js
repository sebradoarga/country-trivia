import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import style from "styled-components";
import { changeTheme } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.theme);
  const clickHandler = () => {
    console.log("clicked the button");
    dispatch(changeTheme());
  };

  return (
    <Button aria-label="theme button" onClick={clickHandler}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
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

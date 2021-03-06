import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import style from "styled-components";
import { changeTheme } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const clickHandler = () => {
    dispatch(changeTheme());
  };

  return (
    <Button aria-label="theme button" onClick={clickHandler}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

const Button = style.button`
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #4C9757;
  transition: all 0.3s ease;
  z-index: 5;
  
  &:hover {
      color: #4c9757cb;
      cursor: pointer;
  }
  
`;

export default ThemeButton;

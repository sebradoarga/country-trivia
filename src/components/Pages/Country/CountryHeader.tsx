import React from "react";
import styled from "styled-components";
import { DefaultRootState, useSelector } from "react-redux";
import { Country } from "../../../redux/types";
import { RootState } from "../../../redux/reducers";

const CountryHeader = ({ country }: { country: Country }) => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const changeTheme = theme === "dark" ? "dark-mode" : "";
  return (
    <div>
      <Image
        className={changeTheme}
        src={country ? `${country.flag}` : ``}
        alt={country ? `Flag of ${country.name}` : "Flag"}
      />
      <Name className={changeTheme}>{country ? country.name : " "}</Name>
    </div>
  );
};

const Image = styled.img`
  width: 25rem;
  height: 16rem;
  display: block;
  margin: auto;
  border-radius: 10px;
  margin-top: 3rem;
  box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  &.dark-mode {
    border: 3px solid white;
  }
`;

const Name = styled.h2`
  color: #222;
  text-align: center;
  margin-top: 3.5rem;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  &.dark-mode {
    color: white;
  }
`;

export default CountryHeader;

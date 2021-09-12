import React from "react";
import CountryContainer from "../CountryContainer";
import ReturnButton from "../ReturnButton";
import { Link } from "react-router-dom";

const Country = ({ countries }) => {
  return (
    <>
      <Link to="/">
        <ReturnButton />
      </Link>
      <CountryContainer countries={countries} />
    </>
  );
};

export default Country;

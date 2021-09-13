import React from "react";
import CountryContainer from "../CountryContainer";
import ReturnButton from "../ReturnButton";
import { Link } from "react-router-dom";
import useCountry from "../../custom-hooks/useCountry";

const Country = ({ countries, country, clickedCountry, setClickedCountry, displayCountry}) => {
  console.log(displayCountry);
  return (
    <>
      <Link to="/">
        <ReturnButton />
      </Link>
      <CountryContainer countries={countries} country={displayCountry} />
    </>
  );
};

export default Country;

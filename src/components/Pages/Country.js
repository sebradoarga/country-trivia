import React from "react";
import CountryContainer from "../CountryContainer";
import ReturnButton from "../ReturnButton";
import { Link } from "react-router-dom";
import CountryStyles from "./Country.module.css";

const Country = ({
  countries,
  displayCountry,
  displayCountryError,
  countryLoading,
  setCountryLoading,
}) => {
  const clickHandler = () => {
    setCountryLoading(true);
  };

  return countryLoading ? (
    <h2 className={CountryStyles.loading}>Loading...</h2>
  ) : (
    <>
      <Link to="/" onClick={() => clickHandler()}>
        <ReturnButton />
      </Link>
      <CountryContainer
        countries={countries}
        country={displayCountry}
        displayCountryError={displayCountryError}
      />
    </>
  );
};

export default Country;

import React from "react";
import CountryContainer from "../CountryContainer";
import ReturnButton from "../ReturnButton";
import { Link, useParams } from "react-router-dom";
import CountryStyles from "./Country.module.css";
import useCountry from "../../custom-hooks/useCountry";

const Country = ({ countries, displayCountryError }) => {
  const { name } = useParams();
  console.log("name", name);
  const country = useCountry(name)[1];
  console.log("country", country);

  return country.length < 1 ? (
    <h2 className={CountryStyles.loading}>Loading...</h2>
  ) : (
    <>
      <Link to="/">
        <ReturnButton />
      </Link>
      <CountryContainer
        countries={countries}
        country={country}
        displayCountryError={displayCountryError}
      />
    </>
  );
};

export default Country;

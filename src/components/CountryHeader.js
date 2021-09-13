import React from "react";
import CountryHeaderStyles from "./CountryHeader.module.css";

const CountryHeader = ({ country }) => {
  console.log(country);
  return (
    <div>
      <img
        src={country.length > 0 ? `${country[0].flag}` : ``}
        alt={country.length > 0 ? `Flag of ${country[0].name}` : "Flag"}
        className={CountryHeaderStyles.img}
      />
      <h2 className={CountryHeaderStyles.name}>
        {country.length > 0 ? country[0].name : " "}
      </h2>
    </div>
  );
};

export default CountryHeader;

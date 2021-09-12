import React from "react";
import CountryContainerStyles from "./CountryContainer.module.css";
import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";

const CountryContainer = ({ countries }) => {
  console.log("countries", countries);

  return (
    <div className={CountryContainerStyles.container}>
      <CountryHeader countries={countries} />
      <div className={CountryContainerStyles.properties}>
        <CountryProperty
          text={"other names"}
          countries={countries}
          property={
            countries.length > 0 ? countries[0].altSpellings : "Loading data..."
          }
        />
        <CountryProperty
          text={"region"}
          countries={countries}
          property={
            countries.length > 0 ? countries[0].region : "Loading data..."
          }
        />
        <CountryProperty
          text={"borders"}
          countries={countries}
          property={
            countries.length > 0 ? countries[0].borders : "Loading data..."
          }
        />
        <CountryProperty
          text={"currencies"}
          countries={countries}
          property={
            countries.length > 0 ? countries[0].currencies : "Loading data..."
          }
        />
        <CountryProperty
          text={"languages"}
          countries={countries}
          property={
            countries.length > 0 ? countries[0].languages : "Loading data..."
          }
        />
      </div>
    </div>
  );
};

export default CountryContainer;

import React from "react";
import CountryContainerStyles from "./CountryContainer.module.css";
import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";
import ErrorMessage from "./ErrorMessage";

const CountryContainer = ({ country, displayCountryError }) => {
  return displayCountryError ? (
    <ErrorMessage />
  ) : (
    <div className={CountryContainerStyles.container}>
      <CountryHeader country={country} />
      <div className={CountryContainerStyles.properties}>
        <CountryProperty
          text={"other spellings"}
          country={country}
          property={
            country.length > 0 ? country[0].altSpellings : "Loading data..."
          }
        />
        <CountryProperty
          text={"region"}
          country={country}
          property={country.length > 0 ? country[0].region : "Loading data..."}
        />
        <CountryProperty
          text={"borders"}
          country={country}
          property={country.length > 0 ? country[0].borders : "Loading data..."}
        />
        <CountryProperty
          text={"currencies"}
          country={country}
          property={
            country.length > 0 ? country[0].currencies : "Loading data..."
          }
        />
        <CountryProperty
          text={"languages"}
          country={country}
          property={
            country.length > 0 ? country[0].languages : "Loading data..."
          }
        />
      </div>
    </div>
  );
};

export default CountryContainer;

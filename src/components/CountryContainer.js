import React from "react";
import CountryContainerStyles from "./CountryContainer.module.css";
import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";
import ErrorMessage from "./ErrorMessage";

const CountryContainer = ({ country, displayCountryError, countries }) => {
  console.log("country[0]", country[0]);
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
          countries={countries}
        />
        <CountryProperty
          text={"region"}
          country={country}
          property={country.length > 0 ? country[0].region : "Loading data..."}
          countries={countries}
        />
        <CountryProperty
          text={"borders"}
          country={country}
          property={country.length > 0 ? country[0].borders : "Loading data..."}
          countries={countries}
        />
        <CountryProperty
          text={"currencies"}
          country={country}
          property={
            country.length > 0 ? country[0].currencies : "Loading data..."
          }
          countries={countries}
        />
        <CountryProperty
          text={"languages"}
          country={country}
          property={
            country.length > 0 ? country[0].languages : "Loading data..."
          }
          countries={countries}
        />
      </div>
    </div>
  );
};

export default CountryContainer;

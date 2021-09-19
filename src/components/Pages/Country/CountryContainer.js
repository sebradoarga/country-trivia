import React from "react";
import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";
import ErrorMessage from "../../ErrorMessage";
import styled from "styled-components";
import Background from "../../../images/map.svg";

const CountryContainer = ({ country, displayCountryError, countries }) => {
  console.log("country[0]", country[0]);
  return displayCountryError ? (
    <ErrorMessage />
  ) : (
    <Container>
      <CountryHeader country={country} />
      <Properties>
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
      </Properties>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${Background}); /* fallback */
  background-image: linear-gradient(#fafafa9f, #fafafa9f), url(${Background});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Properties = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3rem;
`;

export default CountryContainer;

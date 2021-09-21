import React from "react";
import CountryContainer from "./CountryContainer";
import ReturnButton from "./ReturnButton";
import { Link, useParams } from "react-router-dom";
import useCountry from "../../../custom-hooks/useCountry";
import styled from "styled-components";

const Country = ({ displayCountryError }) => {
  const { name } = useParams();
  console.log("name", name);
  const country = useCountry(name)[1];
  console.log("country", country);

  return country.length < 1 ? (
    <Loading>Loading...</Loading>
  ) : (
    <>
      <Link to="/">
        <ReturnButton />
      </Link>
      <CountryContainer
        country={country}
        displayCountryError={displayCountryError}
      />
    </>
  );
};

const Loading = styled.h2`
  color: #222;
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.8rem;
`;

export default Country;

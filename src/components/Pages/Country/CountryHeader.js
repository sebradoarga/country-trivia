import React from "react";
import styled from "styled-components";

const CountryHeader = ({ country }) => {
  return (
    <div>
      <Image
        src={country.length > 0 ? `${country[0].flag}` : ``}
        alt={country.length > 0 ? `Flag of ${country[0].name}` : "Flag"}
      />
      <Name>{country.length > 0 ? country[0].name : " "}</Name>
    </div>
  );
};

const Image = styled.img`
  width: 25rem;
  height: 16rem;
  display: block;
  margin: auto;
  border-radius: 10px;
  margin-top: 3rem;
  box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const Name = styled.h2`
  color: #222;
  text-align: center;
  margin-top: 3.5rem;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

export default CountryHeader;

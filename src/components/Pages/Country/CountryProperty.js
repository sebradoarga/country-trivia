import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const CountryProperty = ({ text, country, property, countries }) => {
  const [visible, setVisible] = useState(true);

  const clickHandler = () => {
    setVisible(!visible);
  };

  const getCountryFromCode = (code) => {
    const rightCountry = countries.filter(
      (country) => country.alpha3Code === code
    );
    console.log("rightCountry", rightCountry);
    return rightCountry[0] === undefined ? code : rightCountry[0].name;
  };

  return (
    <Property>
      <Name onClick={clickHandler}>{text}</Name>
      <Content className={`${visible ? "showContent" : "hideContent"}`}>
        {country.length < 1 ? (
          property
        ) : property.length === 0 ? (
          <li>none</li>
        ) : property === country[0].borders ? (
          property.map((element) => (
            <Item key={uuidv4()}>{getCountryFromCode(element)}</Item>
          ))
        ) : property === country[0].currencies ||
          property === country[0].languages ? (
          property.map((element) => <Item key={uuidv4()}>{element.name}</Item>)
        ) : Array.isArray(property) ? (
          property.map((element) => <Item key={uuidv4()}>{element}</Item>)
        ) : (
          property
        )}
      </Content>
    </Property>
  );
};

const Property = styled.div`
  margin: 1rem;
  padding: 3rem 2rem;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.button`
  font-size: 2rem;
  text-align: center;
  font-weight: 800;
  margin-bottom: 2rem;
  text-transform: uppercase;
  line-height: 2.5rem;
  padding-bottom: 0.7rem;
  transition: transform 0.2s ease-in-out;
  background: transparent;
  border: none;
  color: #222;
  border-bottom: 3px solid #4c9757;

  &:hover {
    transform: translateY(-0.2rem);
    cursor: pointer;
  }
`;

const Content = styled.ul`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  visibility: hidden;
  list-style-type: none;
  overflow-x: auto;
  max-height: 18rem;
  padding: 0 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #4c9757;
    border-radius: 10px;
  }
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

export default CountryProperty;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Country, Currency } from "../../../redux/types";
import { RootState } from "../../../redux/reducers";
import { device } from "../../device";

const CountryProperty = ({
  text,
  country,
  property,
}: {
  text: string;
  country: Country;
  property: string | string[] | Currency[];
}) => {
  const [visible, setVisible] = useState(true);
  const countries = useSelector(
    (state: RootState) => state.countryReducer.countries
  );
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const clickHandler = () => {
    setVisible(!visible);
  };

  const getCountryFromCode = (code: string) => {
    const rightCountry = countries.filter(
      (country: Country) => country.alpha3Code === code
    );
    return rightCountry[0] === undefined ? code : rightCountry[0].name;
  };

  const changeTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <Property>
      <Name onClick={clickHandler} className={changeTheme}>
        {text}
      </Name>
      <Content
        className={`${visible ? "showContent" : "hideContent"} ${
          theme === "dark" && "dark-mode"
        }
}`}
      >
        {country.message || !property ? (
          property
        ) : property.length === 0 || property === "Loading data..." ? (
          <li>none</li>
        ) : property === country.borders ? (
          property.map((element) => (
            <Item key={uuidv4()}>{getCountryFromCode(element)}</Item>
          ))
        ) : property === country.currencies ||
          property === country.languages ? (
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
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;
  margin: 2rem;

  @media ${device.laptop} {
    margin: 1rem;
    padding: 3rem 2rem;
  }
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

  &.dark-mode {
    color: white;
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
    border-radius: 10px;
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

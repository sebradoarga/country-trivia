import { useEffect } from "react";
import CountryContainer from "./CountryContainer";
import ReturnButton from "./ReturnButton";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../redux/action";

const Country = ({ displayCountryError }) => {
  const { name } = useParams();
  const country = useSelector((state) => state.countryReducer.country);
  const theme = useSelector((state) => state.themeReducer.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCountry(name));
  }, []);

  return country.message ? (
    <Loading className={theme === "dark" && "dark-mode"}>Loading...</Loading>
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

  &.dark-mode {
    color: white;
  }
`;

export default Country;

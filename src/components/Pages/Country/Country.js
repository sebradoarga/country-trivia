import { useEffect } from "react";
import CountryContainer from "./CountryContainer";
import ReturnButton from "./ReturnButton";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../redux/action";

const Country = ({ displayCountryError }) => {
  const { name } = useParams();
  console.log("name", name);
  const country = useSelector((state) => state.countryReducer.country);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCountry(name));
  }, []);

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

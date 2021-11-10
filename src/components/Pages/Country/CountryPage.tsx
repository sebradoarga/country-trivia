import { useEffect } from "react";
import CountryContainer from "./CountryContainer";
import ReturnButton from "./ReturnButton";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../redux/action";
import { RootState } from "../../../redux/reducers";
import { Country } from "../../../redux/types";

const CountryPage = ({ windowWidth }: { windowWidth: number }) => {
  const { name } = useParams<{ name?: string }>();
  console.log("name is", name);
  const country: Country[] = useSelector(
    (state: RootState) => state.countryReducer.country
  );
  console.log("country is", country);
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCountry(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = theme === "dark" ? "dark-mode" : "";

  return !country[0] ? (
    <Loading className={changeTheme}>Loading...</Loading>
  ) : country[0].name !== name ? (
    <Loading className={changeTheme}>Loading...</Loading>
  ) : (
    <>
      <Link to="/">
        <ReturnButton />
      </Link>
      <CountryContainer
        country={country ? country[0] : country}
        windowWidth={windowWidth}
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

export default CountryPage;

import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";
import ErrorMessage from "../../ErrorMessage";
import styled from "styled-components";
import Background from "../../../images/map.svg";
import DarkModeBackground from "../../../images/map2.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { Country } from "../../../redux/types";
import LoadingMessage from "../../LoadingMessage";

const CountryContainer = ({ country }: { country: Country }) => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const changeTheme = theme === "dark" ? "dark-mode" : "";
  return !country ? (
    <Loading className={changeTheme}>Loading...</Loading>
  ) : (
    <Container className={changeTheme}>
      <CountryHeader country={country} />
      <Properties>
        <CountryProperty
          text={"other spellings"}
          country={country}
          property={!country.message ? country.altSpellings : "Loading data..."}
        />
        <CountryProperty
          text={"region"}
          country={country}
          property={!country.message ? country.region : "Loading data..."}
        />
        <CountryProperty
          text={"borders"}
          country={country}
          property={!country.message ? country.borders : "Loading data..."}
        />
        <CountryProperty
          text={"currencies"}
          country={country}
          property={!country.message ? country.currencies : "Loading data..."}
        />
        <CountryProperty
          text={"languages"}
          country={country}
          property={!country.message ? country.languages : "Loading data..."}
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.dark-mode {
    background-image: linear-gradient(#06080594, #06080594),
      url(${DarkModeBackground});
  }
`;

const Properties = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3rem;
`;

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

export default CountryContainer;

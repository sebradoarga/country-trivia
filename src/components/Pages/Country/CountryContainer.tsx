import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";
import styled from "styled-components";
import Background from "../../../images/map.svg";
import DarkModeBackground from "../../../images/map2.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { Country } from "../../../redux/types";
import { device } from "../../device";

const CountryContainer = ({
  country,
  windowWidth,
}: {
  country: Country;
  windowWidth: number;
}) => {
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
          windowWidth={windowWidth}
        />
        <CountryProperty
          text={"region"}
          country={country}
          property={!country.message ? country.region : "Loading data..."}
          windowWidth={windowWidth}
        />
        <CountryProperty
          text={"borders"}
          country={country}
          property={!country.message ? country.borders : "Loading data..."}
          windowWidth={windowWidth}
        />
        <CountryProperty
          text={"currencies"}
          country={country}
          property={!country.message ? country.currencies : "Loading data..."}
          windowWidth={windowWidth}
        />
        <CountryProperty
          text={"languages"}
          country={country}
          property={!country.message ? country.languages : "Loading data..."}
          windowWidth={windowWidth}
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
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.dark-mode {
    background-image: linear-gradient(#06080594, #06080594),
      url(${DarkModeBackground});
  }

  @media ${device.laptop} {
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Properties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media ${device.tablet} {
    width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
  }

  @media ${device.laptop} {
    margin-top: 3rem;
    flex-wrap: nowrap;
  }
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

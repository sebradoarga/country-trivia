import styled from "styled-components";
import { FaMapSigns } from "react-icons/fa";
import Globe from "../../../../images/homeMap.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import { device } from "../../../device";

const Hero = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const changeTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <HeroContainer>
      <GlobeImage src={Globe}></GlobeImage>
      <Text>
        <Heading className={changeTheme}>
          Country
          <Trivia>
            <span>
              <FaMapSigns style={{ color: "#4c9757", fontSize: "7rem" }} />
            </span>
            rivia
          </Trivia>
        </Heading>
        <Description className={changeTheme}>
          The world, at your fingertips
        </Description>
      </Text>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: transparent;
  width: 100%;
  max-width: 120rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: flex-end;
    padding-right: 8rem;
  }

  @media ${device.laptop} {
    padding-right: 15rem;
  }
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-family: "Merienda", sans-serif;
  color: #222;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;

  &.dark-mode {
    color: white;
  }

  @media ${device.tablet} {
    font-size: 6rem;
  }

  @media ${device.laptop} {
    font-size: 8rem;
  }
`;

const Trivia = styled.span`
  font-family: "Merienda", sans-serif;
  margin-left: 1rem;
  display: flex;
  flex-wrap: no-wrap;
  align-items: flex-end;
`;

const Description = styled.h2`
  font-size: 3rem;
  font-family: "Birthstone", sans-serif;
  text-align: center;
  letter-spacing: 0.7rem;
  color: #222;

  &.dark-mode {
    color: white;
  }

  @media ${device.tablet} {
    font-size: 3.5rem;
  }

  @media ${device.laptop} {
    font-size: 4rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  margin: 0 1rem;
`;

const GlobeImage = styled.img`
  height: 25rem;
  position: absolute;
  top: 5rem;
  opacity: 0.6;

  @media ${device.tablet} {
    left: 8rem;
  }

  @media ${device.laptop} {
    left: 15rem;
  }

  @media ${device.laptopL} {
    left: 25rem;
  }
`;

export default Hero;

import styled from "styled-components";
import { FaMapSigns } from "react-icons/fa";
import Globe from "../../../../images/homeMap.svg";
import { useSelector } from "react-redux";

const Hero = () => {
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <HeroContainer>
      <GlobeImage src={Globe}></GlobeImage>
      <Text>
        <Heading className={theme === "dark" && "dark-mode"}>
          Country{" "}
          <span>
            <FaMapSigns style={{ color: "#4c9757" }} />
          </span>
          rivia
        </Heading>
        <Description className={theme === "dark" && "dark-mode"}>
          The world, at your fingertips
        </Description>
      </Text>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 8rem;
  font-family: "Merienda", sans-serif;
  color: #222;

  &.dark-mode {
    color: white;
  }
`;

const Description = styled.h2`
  font-size: 4rem;
  font-family: "Birthstone", sans-serif;
  letter-spacing: 0.7rem;
  color: #222;

  &.dark-mode {
    color: white;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  right: 10rem;
`;

const GlobeImage = styled.img`
  width: 45%;
  position: relative;
  left: 8rem;
`;

export default Hero;

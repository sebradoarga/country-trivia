import styled from "styled-components";
import FavoritedCountry from "./FavoritedCountry";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { RootState } from "../../../redux/reducers";
import { Country } from "../../../redux/types";

const ExpandedCart = ({
  expanded,
  setExpanded,
}: {
  expanded: Boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cart = useSelector((state: RootState) => state.countryReducer.cart);
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const shrinkCart = () => {
    setExpanded(false);
  };

  return (
    <Container
      className={`${expanded ? "expanded" : "shrunk"} ${
        theme === "dark" && "dark-mode"
      }`}
    >
      <CloseBtn onClick={shrinkCart}>x</CloseBtn>
      <Heading>
        Your Favorites{" "}
        <span>
          <FaStar
            style={{
              fontSize: "1.8rem",
              position: "relative",
              top: "0.13rem",
              marginLeft: "0.2rem",
            }}
          />
        </span>
      </Heading>
      {cart.length > 0 ? (
        <Countries>
          {cart.map((country: Country) => (
            <FavoritedCountry
              key={country.name}
              flag={country.flag}
              name={country.name}
            />
          ))}
        </Countries>
      ) : (
        <NoCountries>You don't have any favorite countries.</NoCountries>
      )}
    </Container>
  );
};

const Container = styled.aside`
  background: #fafafa;
  width: 32rem;
  height: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  padding: 10rem 2rem 3rem 2rem;
  border-left: 7px solid #4c9757;
  background-image: linear-gradient(0, #d9f9daa1, white);

  &.dark-mode {
    background: #070906;
  }
`;

const CloseBtn = styled.button`
  font-size: 3rem;
  font-weight: 400;
  background: transparent;
  border: none;
  color: #4c9757;
  position: absolute;
  right: 2rem;
  top: 3rem;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Heading = styled.h2`
  font-size: 2.7rem;
  background: #4c9757;
  color: white;
  padding: 1rem;
  margin-left: -2rem;
  margin-bottom: 3rem;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 90%;
`;

const Countries = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  padding-right: 2rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(34, 34, 34, 0.2);
    border-radius: 10px;
    height: 5rem;
  }
`;

const NoCountries = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-top: 5rem;
`;

export default ExpandedCart;

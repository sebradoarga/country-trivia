import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { favoriteCountry, removeCountry } from "../../../../redux/action";
import { RootState } from "../../../../redux/reducers";
import { Country } from "../../../../redux/types";

const TableBodyRow = ({ country }: { country: Country }) => {
  const { flag, name, population, region, languages } = country;
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.countryReducer.cart);
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const addToFavorites = (country: Country) => {
    if (!Boolean(cart.find((country: Country) => country.name === name))) {
      dispatch(favoriteCountry(country));
    } else {
      dispatch(removeCountry(name));
    }
  };

  const changeTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <Row className={changeTheme}>
      <Cell className={changeTheme}>
        <Image src={`${flag}`} alt={`Flag of ${name}`} />
      </Cell>
      <Cell className={changeTheme}>
        <Link to={`/country/${name}`} style={{ textDecoration: "underline" }}>
          {name}
        </Link>
      </Cell>
      <Cell className={changeTheme}>{`${(population / 1000000).toFixed(
        2
      )} M`}</Cell>
      <Cell className={changeTheme}>{region}</Cell>
      <Cell className={changeTheme}>
        <List>
          {languages.map((language) => (
            <li key={language.name}>{language.nativeName}</li>
          ))}
        </List>
      </Cell>
      <Cell className={changeTheme}>
        <Button onClick={() => addToFavorites(country)}>
          <FaStar
            className={`${
              Boolean(cart.find((country: Country) => country.name === name))
                ? "favorited"
                : "unfavorited"
            } ${changeTheme}`}
          />
        </Button>
      </Cell>
    </Row>
  );
};

const Cell = styled.td`
  text-align: center;
  font-size: 2rem;
  padding: 2.5rem 1rem;
  border-bottom: 2px solid #4c9757;
  color: #222;

  a {
    transition: all 0.1s ease-in-out;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.1rem;
    line-height: 2.5rem;

    &:hover {
      color: #4c9757;
    }
  }

  &.dark-mode {
    color: white;
    border-color: white;
    a {
      color: white;
      &:hover {
        color: #4c9757;
      }
    }
  }
`;

const Row = styled.tr`
  background: #fef9f9;
  &:last-child td {
    border-bottom: none;
  }

  &.dark-mode {
    background: #1a1a1a;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 3rem;
  margin: auto;
  display: block;
  transition: all 0.3s ease;
  color: #222;

  &:hover {
    cursor: pointer;
    color: #4c9757;
    transform: scale(1.2);
  }

  &.dark-mode {
    color: white;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

export default TableBodyRow;

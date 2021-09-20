import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { favoriteCountry, removeCountry } from "../../../../redux/action";

const TableBodyRow = ({ country }) => {
  const { flag, name, population, region, languages } = country;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToFavorites = (country, e) => {
    if (!Boolean(cart.find((country) => country.name === name))) {
      dispatch(favoriteCountry(country));
    } else {
      dispatch(removeCountry(name));
    }
  };

  return (
    <Row>
      <Cell>
        <Image src={`${flag}`} alt={`Flag of ${name}`} />
      </Cell>
      <Cell>
        <Link to={`/country/${name}`} style={{ textDecoration: "underline" }}>
          {name}
        </Link>
      </Cell>
      <Cell>{`${(population / 1000000).toFixed(2)} M`}</Cell>
      <Cell>{region}</Cell>
      <Cell>
        <List>
          {languages.map((language) => (
            <li key={language.name}>{language.nativeName}</li>
          ))}
        </List>
      </Cell>
      <Cell>
        <Button onClick={(e) => addToFavorites(country, e)}>
          <FaStar
            className={
              Boolean(cart.find((country) => country.name === name))
                ? "favorited"
                : "unfavorited"
            }
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
`;

const Row = styled.tr`
  &:last-child td {
    border-bottom: none;
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
`;

const List = styled.ul`
  list-style-type: none;
`;

export default TableBodyRow;

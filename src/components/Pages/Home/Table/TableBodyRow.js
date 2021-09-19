import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TableBodyRow = ({ country, setClickedCountry }) => {
  const { flag, name, population, region, languages } = country;

  return (
    <Row>
      <Cell>
        <Image src={`${flag}`} alt={`Flag of ${name}`} />
      </Cell>
      <Cell>
        <Link to={`/country/${name}`} onClick={() => setClickedCountry(name)}>
          {name}
        </Link>
      </Cell>
      <Cell>{population}</Cell>
      <Cell>{region}</Cell>
      <Cell>
        <List>
          {languages.map((language) => (
            <li key={language.name}>{language.nativeName}</li>
          ))}
        </List>
      </Cell>
      <Cell>
        <Button>Buy</Button>
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
  padding: 1rem 2rem;
  border-radius: 5px;
  background: #4c9757;
  border: none;
  color: white;
  font-size: 2rem;
  margin: auto;
  display: block;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: #61bb6e;
    cursor: pointer;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

export default TableBodyRow;

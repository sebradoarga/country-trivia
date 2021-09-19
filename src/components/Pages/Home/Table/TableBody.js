import React from "react";
import TableBodyRow from "./TableBodyRow";
import styled from "styled-components";

const TableBody = ({
  countries,
  searchText,
  searchedCountry,
  clickedCountry,
  setClickedCountry,
}) => {
  return (
    <tbody>
      {searchText === "" ? (
        countries.map((country) => (
          <TableBodyRow
            key={country.name}
            country={country}
            clickedCountry={clickedCountry}
            setClickedCountry={setClickedCountry}
          />
        ))
      ) : searchedCountry.length === 0 ? (
        <tr>
          <td>
            <Error>Hmm, are you sure that's a country?</Error>
          </td>
        </tr>
      ) : (
        searchedCountry.map((country) => (
          <TableBodyRow
            key={country.name}
            country={country}
            clickedCountry={clickedCountry}
            setClickedCountry={setClickedCountry}
          />
        ))
      )}
    </tbody>
  );
};

const Error = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin: auto;
  font-weight: 400;
  position: absolute;
  top: 27rem;
  width: 90%;
`;
export default TableBody;

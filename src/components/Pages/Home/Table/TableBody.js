import { useEffect } from "react";
import TableBodyRow from "./TableBodyRow";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../../redux/action";

const TableBody = ({ countries, searchText }) => {
  const dispatch = useDispatch();
  const searchedCountry = useSelector((state) => state.country);
  console.log("searchedCountry", searchedCountry[0]);

  useEffect(() => {
    dispatch(getOneCountry(searchText));
  }, [searchText]);

  return (
    <tbody>
      {searchText === "" ? (
        countries.length > 0 &&
        countries.map((country) => (
          <TableBodyRow key={country.name} country={country} />
        ))
      ) : !searchedCountry[0] ? (
        <tr>
          <td>
            <Error>
              Sorry, we couldn't find any countries matching that name.
            </Error>
          </td>
        </tr>
      ) : (
        searchedCountry.map((country) => (
          <TableBodyRow key={country.name} country={country} />
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
  width: 90%;
  bottom: 5rem;
`;
export default TableBody;

import TableBodyRow from "./TableBodyRow";
import styled from "styled-components";
import useCountry from "../../../../custom-hooks/useCountry";

const TableBody = ({ countries, error, searchText }) => {
  const [countryError, searchedCountry] = useCountry(searchText);

  return (
    <tbody>
      {searchText === "" ? (
        countries.length > 0 &&
        countries.map((country) => (
          <TableBodyRow key={country.name} country={country} />
        ))
      ) : searchedCountry.length === 0 ? (
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
  top: 27rem;
  width: 90%;
`;
export default TableBody;

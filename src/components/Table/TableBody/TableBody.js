import React from "react";
import TableBodyRow from "./TableBodyRow/TableBodyRow";
import TableBodyStyles from "./TableBody.module.css";

const TableBody = ({
  countries,
  searchText,
  searchedCountry,
}) => {
  return (
    <tbody className={TableBodyStyles.container}>
      {searchText === "" ? (
        countries.map((country) => (
          <TableBodyRow key={country.name} country={country} />
        ))
      ) : searchedCountry.length === 0 ? (
        <tr>
          <td>
            <h2 className={TableBodyStyles.error}>
              Hmm, are you sure that's a country?
            </h2>
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

export default TableBody;

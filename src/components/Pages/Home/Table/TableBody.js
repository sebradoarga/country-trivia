import { useState, useEffect } from "react";
import TableBodyRow from "./TableBodyRow";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../../redux/action";

const TableBody = ({ searchText }) => {
  const dispatch = useDispatch();
  const searchedCountry = useSelector((state) => state.countryReducer.country);
  const sort = useSelector((state) => state.countryReducer.sort);
  const sortedCountries = useSelector(
    (state) => state.countryReducer.countries
  );

  useEffect(() => {
    dispatch(getOneCountry(searchText));
  }, [searchText]);

  return (
    <tbody>
      {searchText === ""
        ? sortedCountries.length > 0 &&
          sortedCountries.map((country) => (
            <TableBodyRow key={country.name} country={country} />
          ))
        : searchedCountry[0] &&
          searchedCountry.map((country) => (
            <TableBodyRow key={country.name} country={country} />
          ))}
    </tbody>
  );
};

export default TableBody;

import { useState, useEffect } from "react";
import TableBodyRow from "./TableBodyRow";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../../redux/action";
import { Country } from "../../../../redux/types";
import { RootState } from "../../../../redux/reducers";

const TableBody = ({ searchText }: { searchText: string }) => {
  const dispatch = useDispatch();
  const searchedCountry = useSelector(
    (state: RootState) => state.countryReducer.country
  );
  const sort = useSelector((state: RootState) => state.countryReducer.sort);
  const sortedCountries = useSelector(
    (state: RootState) => state.countryReducer.countries
  );

  useEffect(() => {
    dispatch(getOneCountry(searchText));
  }, [searchText]);

  return (
    <tbody>
      {searchText === ""
        ? sortedCountries.length > 0 &&
          sortedCountries.map((country: Country) => (
            <TableBodyRow key={country.name} country={country} />
          ))
        : searchedCountry[0] &&
          searchedCountry.map((country: Country) => (
            <TableBodyRow key={country.name} country={country} />
          ))}
    </tbody>
  );
};

export default TableBody;

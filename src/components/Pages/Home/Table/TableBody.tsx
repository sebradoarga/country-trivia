import { useEffect } from "react";
import TableBodyRow from "./TableBodyRow";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../../../../redux/action";
import { Country } from "../../../../redux/types";
import { RootState } from "../../../../redux/reducers";

const TableBody = ({
  searchText,
  windowWidth,
}: {
  searchText: string;
  windowWidth: number;
}) => {
  const dispatch = useDispatch();
  const searchedCountry = useSelector(
    (state: RootState) => state.countryReducer.country
  );
  const sortedCountries = useSelector(
    (state: RootState) => state.countryReducer.countries
  );
  const tableLoading = useSelector(
    (state: RootState) => state.countryReducer.tableLoading
  );

  useEffect(() => {
    if (searchText !== "") {
      dispatch(getOneCountry(searchText));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return tableLoading ? (
    <h2>Hello</h2>
  ) : (
    <tbody>
      {searchText === ""
        ? sortedCountries.length > 0 &&
          sortedCountries.map((country: Country) => (
            <TableBodyRow
              key={country.name}
              country={country}
              windowWidth={windowWidth}
            />
          ))
        : searchedCountry[0] &&
          searchedCountry.map((country: Country) => (
            <TableBodyRow
              key={country.name}
              country={country}
              windowWidth={windowWidth}
            />
          ))}
    </tbody>
  );
};

export default TableBody;

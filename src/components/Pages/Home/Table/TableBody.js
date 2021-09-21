import { useEffect } from "react";
import TableBodyRow from "./TableBodyRow";
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
      {searchText === ""
        ? countries.length > 0 &&
          countries.map((country) => (
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

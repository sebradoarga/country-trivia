import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableStyles from "./Table.module.css";
import ErrorMessage from "../ErrorMessage";
import LoadingMessage from "../LoadingMessage";

const Table = ({
  loading,
  error,
  countries,
  searchText,
  searchedCountry,
  countryError,
}) => {
  return loading ? (
    <LoadingMessage />
  ) : error ? (
    <ErrorMessage />
  ) : (
    <table className={TableStyles.table} cellSpacing="0" cellPadding="0">
      <TableHead />
      <TableBody
        countries={countries}
        searchText={searchText}
        searchedCountry={searchedCountry}
        countryError={countryError}
      />
    </table>
  );
};

export default Table;

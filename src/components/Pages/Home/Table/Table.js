import TableHead from "./TableHead";
import TableBody from "./TableBody";
import ErrorMessage from "../../../ErrorMessage";
import LoadingMessage from "../../../LoadingMessage";
import styled from "styled-components";

const Table = ({
  loading,
  error,
  countries,
  searchText,
  searchedCountry,
  countryError,
  clickedCountry,
  setClickedCountry,
}) => {
  return loading ? (
    <LoadingMessage />
  ) : error ? (
    <ErrorMessage />
  ) : (
    <TableTag cellSpacing="0" cellPadding="0">
      <TableHead />
      <TableBody
        countries={countries}
        searchText={searchText}
        searchedCountry={searchedCountry}
        clickedCountry={clickedCountry}
        setClickedCountry={setClickedCountry}
      />
    </TableTag>
  );
};

const TableTag = styled.table`
  width: 90%;
  table-layout: fixed;
  min-width: 120rem;
  border: 3px solid #4c9757;
  border-radius: 5px;
  margin: 2rem auto;
  box-shadow: 0 10px 5px 3px rgba(0, 0, 0, 0.3);
`;

export default Table;

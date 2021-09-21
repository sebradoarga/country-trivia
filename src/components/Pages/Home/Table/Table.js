import TableHead from "./TableHead";
import TableBody from "./TableBody";
import ErrorMessage from "../../../ErrorMessage";
import LoadingMessage from "../../../LoadingMessage";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../../../redux/action";

const Table = ({ searchText }) => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return countries.length < 1 ? (
    <LoadingMessage />
  ) : error ? (
    <ErrorMessage />
  ) : (
    <TableTag cellSpacing="0" cellPadding="0">
      <TableHead />
      <TableBody countries={countries} searchText={searchText} />
    </TableTag>
  );
};

const TableTag = styled.table`
  width: 90%;
  table-layout: fixed;
  min-width: 120rem;
  border-radius: 10px;
  overflow: hidden;
  margin: 2rem auto;
  box-shadow: 0 10px 5px 3px rgba(0, 0, 0, 0.3);
`;

export default Table;

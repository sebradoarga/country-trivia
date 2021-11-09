import TableHead from "./TableHead";
import TableBody from "./TableBody";
import ErrorMessage from "../../../ErrorMessage";
import LoadingMessage from "../../../LoadingMessage";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../../../redux/action";
import { RootState } from "../../../../redux/reducers";

const Table = ({ searchText }: { searchText: string }) => {
  const dispatch = useDispatch();

  const countries = useSelector(
    (state: RootState) => state.countryReducer.countries
  );
  const error = useSelector((state: RootState) => state.countryReducer.error);

  useEffect(() => {
    dispatch(getCountries());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return countries.length < 1 ? (
    <LoadingMessage />
  ) : error ? (
    <ErrorMessage />
  ) : (
    <TableTag cellSpacing="0" cellPadding="0">
      <TableHead />
      <TableBody searchText={searchText} />
    </TableTag>
  );
};

const TableTag = styled.table`
  width: 90%;
  table-layout: fixed;
  border-radius: 10px;
  overflow: hidden;
  margin: 2rem auto;
  margin-bottom: 0;
  box-shadow: 0 10px 5px 3px rgba(0, 0, 0, 0.3);
`;

export default Table;

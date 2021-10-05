import styled from "styled-components";
import SortDropdown from "./SortDropdown";

const TableHeadCell = ({ text }: { text: string }) => {
  return <Cell>{text === "" ? <SortDropdown /> : text}</Cell>;
};

const Cell = styled.th`
  font-size: 2rem;
  padding: 2rem 1rem;
  text-transform: uppercase;
  color: white;

  &:first-child {
    width: 24%;
  }

  &:last-child {
    width: 13rem;
  }
`;

export default TableHeadCell;

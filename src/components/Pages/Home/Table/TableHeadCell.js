import React from "react";
import styled from "styled-components";

const TableHeadCell = ({ text }) => {
  return <Cell>{text}</Cell>;
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

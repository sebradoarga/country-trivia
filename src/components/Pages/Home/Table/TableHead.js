import React from "react";
import TableHeadCell from "./TableHeadCell";
import styled from "styled-components";

const TableHead = () => {
  return (
    <thead>
      <Row>
        <TableHeadCell text={"Flag"} />
        <TableHeadCell text={"Name"} />
        <TableHeadCell text={"Population"} />
        <TableHeadCell text={"Region"} />
        <TableHeadCell text={"Languages"} />
        <TableHeadCell text={""} />
      </Row>
    </thead>
  );
};

const Row = styled.tr`
  background: #4c9757;
`;

export default TableHead;

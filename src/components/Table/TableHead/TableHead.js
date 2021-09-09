import React from "react";
import TableHeadCell from "./TableHeadCell/TableHeadCell";
import TableHeadStyles from './TableHead.module.css';

const TableHead = () => {
  return (
    <thead>
      <tr className={TableHeadStyles.row}>
        <TableHeadCell text={"Flag"} />
        <TableHeadCell text={"Name"} />
        <TableHeadCell text={"Population"} />
        <TableHeadCell text={"Region"} />
        <TableHeadCell text={"Languages"} />
        <TableHeadCell text={""} />
      </tr>
    </thead>
  );
};

export default TableHead;

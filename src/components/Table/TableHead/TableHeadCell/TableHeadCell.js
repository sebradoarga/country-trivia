import React from "react";
import TableHeadCellStyles from './TableHeadCell.module.css'

const TableHeadCell = ({text}) => {
  return <th className={TableHeadCellStyles.cell}>{text}</th>;
};

export default TableHeadCell;

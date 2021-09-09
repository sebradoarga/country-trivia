import React from 'react';
import TableBodyRowStyles from './TableBodyRow.module.css';

const TableBodyRow = ({country}) => {
    return (
        <tr>
            <td className={TableBodyRowStyles.cell}>{country.flag}</td>
            <td className={TableBodyRowStyles.cell}>{country.name}</td>
            <td className={TableBodyRowStyles.cell}>{country.population}</td>
            <td className={TableBodyRowStyles.cell}>{country.region}</td>
            <td className={TableBodyRowStyles.cell}>{country.languages}</td>
            <td>
                <button className={TableBodyRowStyles.button}>Buy</button>
            </td>
        </tr>
    )
}

export default TableBodyRow

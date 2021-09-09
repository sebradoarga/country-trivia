import React from 'react';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import TableBodyStyles from './TableBody.module.css';

const TableBody = () => {
    return (
        <tbody className={TableBodyStyles.container}>
            <TableBodyRow country = {{flag: "./country.png", name: "Romania", population: "50000000", region: "Balkan", languages: "Romanian"}}/>
            <TableBodyRow country = {{flag: "./country.png", name: "Romania", population: "50000000", region: "Balkan", languages: "Romanian"}}/>
            <TableBodyRow country = {{flag: "./country.png", name: "Romania", population: "50000000", region: "Balkan", languages: "Romanian"}}/>
        </tbody>
    )
}

export default TableBody

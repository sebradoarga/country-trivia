import React from 'react';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import TableBodyStyles from './TableBody.module.css';

const TableBody = ({countries}) => {
    return (
        <tbody className={TableBodyStyles.container}>
            {countries.map(country => (
                <TableBodyRow key={country.name} country={country} />
            ))}
        </tbody>
    )
}

export default TableBody

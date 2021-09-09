import React from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import TableStyles from './Table.module.css';

const Table = () => {
    return (
        <table className={TableStyles.table} cellSpacing="0" cellPadding="0">
            <TableHead />
            <TableBody />
        </table>
    )
}

export default Table

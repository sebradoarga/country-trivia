import React, {useState, useEffect} from 'react';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import TableBodyStyles from './TableBody.module.css';
import useCountries from '../../../custom-hooks/useCountries';

const TableBody = () => {
    const [error, countries] = useCountries();
    console.log(countries);

// SET UP ERROR CASE!!

    return (
        <tbody className={TableBodyStyles.container}>
            {countries.map(country => (
                <TableBodyRow key={country.name} country={country} />
            ))}
        </tbody>
    )
}

export default TableBody

import React, {useState, useEffect} from 'react';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import TableBodyStyles from './TableBody.module.css';

const TableBody = () => {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();
        setCountries(data);
    }

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <tbody className={TableBodyStyles.container}>
            {countries.map(country => (
                <TableBodyRow key={country.name} country={country} />
            ))}
        </tbody>
    )
}

export default TableBody

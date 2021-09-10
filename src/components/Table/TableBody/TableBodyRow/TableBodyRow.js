import React from 'react';
import TableBodyRowStyles from './TableBodyRow.module.css';

const TableBodyRow = ({country}) => {
    const {flag, name, population, region, languages} = country;
    
    return (
        <tr className={TableBodyRowStyles.row}>
            <td className={TableBodyRowStyles.cell}>
                <img src={`${flag}`} alt="" className={TableBodyRowStyles.img} />
            </td>
            <td className={TableBodyRowStyles.cell}>{name}</td>
            <td className={TableBodyRowStyles.cell}>{population}</td>
            <td className={TableBodyRowStyles.cell}>{region}</td>
            <td className={TableBodyRowStyles.cell}>
                <ul className={TableBodyRowStyles.list}>
                    {languages.map(language => (
                        <li key={language.name}>{language.nativeName}</li>
                    ))}
                </ul>
            </td>
            <td className={TableBodyRowStyles.cell}>
                <button className={TableBodyRowStyles.button}>Buy</button>
            </td>
        </tr>
    )
}

export default TableBodyRow

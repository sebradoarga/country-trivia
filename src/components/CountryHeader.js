import React from 'react';
import CountryHeaderStyles from './CountryHeader.module.css';

const CountryHeader = ({countries}) => {
    return (
        <div>
            <img src={countries.length > 0 ? `${countries[0].flag}` : ``} alt="" className={CountryHeaderStyles.img} />
            <h2 className={CountryHeaderStyles.name}>{countries.length > 0 ? countries[0].name : " "}</h2>
        </div>
    )
}

export default CountryHeader

import React from "react";
import CountryStyles from './Country.module.css';
import CountryContainer from "../CountryContainer";

const Country = ({countries}) => {
  return (
    <div className={CountryStyles.body}>
        <CountryContainer countries={countries}/>
    </div>
  );
};

export default Country;

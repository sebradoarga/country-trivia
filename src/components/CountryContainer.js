import React from "react";
import CountryContainerStyles from "./CountryContainer.module.css";
import CountryHeader from "./CountryHeader";
import CountryProperty from "./CountryProperty";

const CountryContainer = ({ countries }) => {
  return (
    <div className={CountryContainerStyles.container}>
      <CountryHeader countries={countries} />
      <div className={CountryContainerStyles.properties}>
        <CountryProperty text={"other names"}/>
        <CountryProperty text={"region"}/>
        <CountryProperty text={"borders"}/>
        <CountryProperty text={"currencies"}/>
        <CountryProperty text={"languages"}/>
      </div>
    </div>
  );
};

export default CountryContainer;

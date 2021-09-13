import React, { useState } from "react";
import CountryPropertyStyles from "./CountryProperty.module.css";
import { v4 as uuidv4 } from "uuid";

const CountryProperty = ({ text, country, property }) => {
  const [visible, setVisible] = useState(true);

  const clickHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className={CountryPropertyStyles.property}>
      <button className={CountryPropertyStyles.name} onClick={clickHandler}>
        {text}
      </button>
      <ul
        className={`${CountryPropertyStyles.content} ${
          visible
            ? CountryPropertyStyles.showContent
            : CountryPropertyStyles.hideContent
        }`}
      >
        {country.length < 1 ? (
          property
        ) : property.length === 0 ? (
          <li>none</li>
        ) : property === country[0].currencies ||
          property === country[0].languages ? (
          property.map((element) => (
            <li key={uuidv4()} className={CountryPropertyStyles.listItem}>
              {element.name}
            </li>
          ))
        ) : Array.isArray(property) ? (
          property.map((element) => (
            <li key={uuidv4()} className={CountryPropertyStyles.listItem}>
              {element}
            </li>
          ))
        ) : (
          property
        )}
      </ul>
    </div>
  );
};

export default CountryProperty;

import React, { useState } from "react";
import CountryPropertyStyles from "./CountryProperty.module.css";

const CountryProperty = ({ text, countries, property }) => {
  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible(!visible);
  };

  console.log("country", countries[0]);
  console.log("property", property);

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
        {countries.length < 1
          ? property
          : property === countries[0].currencies ||
            property === countries[0].languages
          ? property.map((element) => (
              <li className={CountryPropertyStyles.listItem}>{element.name}</li>
            ))
          : Array.isArray(property)
          ? property.map((element) => (
              <li className={CountryPropertyStyles.listItem}>{element}</li>
            ))
          : property}
      </ul>
    </div>
  );
};

export default CountryProperty;

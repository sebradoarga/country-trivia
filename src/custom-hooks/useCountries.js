// This hook is used to fetch all countries
import { useState, useEffect } from "react";

const useCountries = () => {
  const URL = "https://restcountries.eu/rest/v2/";
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();

  const getCountries = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return [error, countries];
};

export default useCountries;

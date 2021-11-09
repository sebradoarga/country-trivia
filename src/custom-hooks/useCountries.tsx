// This hook is used to fetch all countries
import { useState, useEffect } from "react";
import { Country } from "../redux/types";

const useCountries = () => {
  const URL = "https://restcountries.com/v2/all";
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState();
  const getCountries = async () => {
    try {
      const response = await fetch(URL);
      const data: Country[] = await response.json();
      setCountries(data);
    } catch (error: any) {
      setError(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return [error, countries];
};

export default useCountries;

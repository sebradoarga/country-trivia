// This hook is used to fetch one specific country
import React, {useState, useEffect} from 'react';

const useCountry = (givenCountry) => {
    const URL = 'https://restcountries.eu/rest/v2/';
    const [country, setCountry] = useState([]);
    const [error, setError] = useState();

    const getCountry = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setCountry(await data.filter(country => country.name === givenCountry));    
        } catch(error) {
            setError(error);
        }
    }

    useEffect(() => {
        getCountry();
    }, []);

    return [error, country];
}

export default useCountry

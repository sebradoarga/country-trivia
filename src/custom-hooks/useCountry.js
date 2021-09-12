// This hook is used to fetch one specific country
import React, {useState, useEffect} from 'react';

const useCountry = (givenCountry) => {
    const URL = `https://restcountries.eu/rest/v2/name/${givenCountry}`;
    const [country, setCountry] = useState([]);
    const [error, setError] = useState();

    const getCountry = async () => {
        if(givenCountry !== "") {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                const filteredResponse = data.filter(country => country.name.slice(0, givenCountry.length).toLowerCase() === givenCountry.toLowerCase());
                setCountry(filteredResponse); 
            } catch(error) {
                setError(error);
            }    
        }
    } 

    useEffect(() => {
        getCountry();
    }, [givenCountry]);

    return [error, country];
}

export default useCountry

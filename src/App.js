import "./App.css";
import {useState, useEffect} from 'react';
import Home from "./components/Pages/Home";
import Country from "./components/Pages/Country";
import useCountries from './custom-hooks/useCountries';
import useCountry from './custom-hooks/useCountry';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, countries] = useCountries(setLoading);
  const [searchText, setSearchText] = useState("");
  const [countryError, searchedCountry] = useCountry(searchText);

  return (
    <div className="App">
      {/* <Home searchText={searchText} setSearchText={setSearchText} loading={loading} error={error} countries={countries} searchedCountry={searchedCountry} countryError={countryError} /> */
      <Country countries={countries}/>
      }
    </div>
  );
}

export default App;

import "./App.css";
import {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import useCountries from "./custom-hooks/useCountries";
import useCountry from './custom-hooks/useCountry';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, countries] = useCountries(setLoading);
  const [searchText, setSearchText] = useState("");
  const [countryError, searchedCountry] = useCountry(searchText);

  return (
    <div className="App">
      <Header 
      searchText={searchText}
      setSearchText={setSearchText} />
      <Table
      loading={loading}
      error={error} 
      countries={countries}
      searchText={searchText}
      searchedCountry={searchedCountry} 
      countryError={countryError}/>
    </div>
  );
}

export default App;

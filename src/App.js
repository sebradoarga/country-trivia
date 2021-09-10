import "./App.css";
import {useState} from 'react';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import useCountries from "./custom-hooks/useCountries";
import useCountry from './custom-hooks/useCountry';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, countries] = useCountries(setLoading);
  const [countryError, country] = useCountry('Romania');
  const [searchText, setSearchText] = useState("");
  console.log("searchText", searchText);  

  // SET UP ERROR CASE!!

  return (
    <div className="App">
      <Header 
      searchText={searchText}
      setSearchText={setSearchText} />
      <Table
      loading={loading}
      error={error} 
      countries={countries} />
    </div>
  );
}

export default App;

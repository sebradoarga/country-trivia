import "./App.css";
import {useState} from 'react';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import useCountries from "./custom-hooks/useCountries";

function App() {
  const [loading, setLoading] = useState(true);
  console.log("loading before", loading);
  const [error, countries] = useCountries(setLoading);
  console.log("loading after", loading);
  

  // SET UP ERROR CASE!!

  return (
    <div className="App">
      <Header />
      <Table
      loading={loading}
      error={error} 
      countries={countries} />
    </div>
  );
}

export default App;

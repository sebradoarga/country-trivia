import "./App.css";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import useCountries from "./custom-hooks/useCountries";

function App() {
  const [error, countries] = useCountries();

  // SET UP ERROR CASE!!

  return (
    <div className="App">
      <Header />
      <Table
      error={error} 
      countries={countries} />
    </div>
  );
}

export default App;

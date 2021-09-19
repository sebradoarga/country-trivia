import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Pages/Home/Home";
import Country from "./components/Pages/Country/Country";
import useCountries from "./custom-hooks/useCountries";
import useCountry from "./custom-hooks/useCountry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, countries] = useCountries(setLoading);
  const [searchText, setSearchText] = useState("");
  const [countryError, searchedCountry] = useCountry(searchText);
  const [clickedCountry, setClickedCountry] = useState("");

  console.log("app");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home
              searchText={searchText}
              setSearchText={setSearchText}
              loading={loading}
              error={error}
              countries={countries}
              searchedCountry={searchedCountry}
              countryError={countryError}
              clickedCountry={clickedCountry}
              setClickedCountry={setClickedCountry}
            />
          </Route>
          <Route path="/country/:name" exact>
            <Country
              countries={countries}
              clickedCountry={clickedCountry}
              setClickedCountry={setClickedCountry}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

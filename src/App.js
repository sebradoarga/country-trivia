import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Pages/Home";
import Country from "./components/Pages/Country";
import useCountries from "./custom-hooks/useCountries";
import useCountry from "./custom-hooks/useCountry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, countries] = useCountries(setLoading);
  const [searchText, setSearchText] = useState("");
  const [countryError, searchedCountry] = useCountry(searchText);
  const [clickedCountry, setClickedCountry] = useState("");
  const [displayCountryError, displayCountry] = useCountry(clickedCountry);
  const [countryLoading, setCountryLoading] = useState(true);

  useEffect(() => {
    displayCountry.length === 0
      ? setCountryLoading(true)
      : setCountryLoading(false);
  }, [displayCountry]);

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
          <Route to="/country/:name">
            <Country
              countries={countries}
              clickedCountry={clickedCountry}
              setClickedCountry={setClickedCountry}
              displayCountryError={displayCountryError}
              displayCountry={displayCountry}
              countryLoading={countryLoading}
              setCountryLoading={setCountryLoading}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

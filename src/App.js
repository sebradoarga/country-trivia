import "./App.css";
import { useState } from "react";
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
              displayCountry={displayCountry}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

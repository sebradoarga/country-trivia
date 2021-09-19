import "./App.css";
import Home from "./components/Pages/Home/Home";
import Country from "./components/Pages/Country/Country";
import useCountries from "./custom-hooks/useCountries";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [error, countries] = useCountries();

  console.log("app");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home error={error} countries={countries} />
          </Route>
          <Route exact path="/country/:name">
            <Country countries={countries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

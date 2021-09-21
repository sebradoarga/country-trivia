import "./App.css";
import Home from "./components/Pages/Home/Home";
import Country from "./components/Pages/Country/Country";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country/:name">
            <Country />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

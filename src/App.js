import "./App.css";
import Home from "./components/Pages/Home/Home";
import Country from "./components/Pages/Country/Country";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <Router>
      <AppContainer className={`App ${theme === "dark" && "dark-mode"}`}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country/:name">
            <Country />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  background-image: linear-gradient(to right, #d9f9daa1, white);
  background-repeat: no-repeat;
  padding-bottom: 2rem;

  &.dark-mode {
    background: #060805;
  }
`;

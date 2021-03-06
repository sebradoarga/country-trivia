import "./App.css";
import Home from "./components/Pages/Home/Home";
import CountryPage from "./components/Pages/Country/CountryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { useState } from "react";

function App() {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWidth);

  return (
    <Router>
      <AppContainer className={`App ${theme === "dark" && "dark-mode"}`}>
        <Switch>
          <Route exact path="/">
            <Home windowWidth={windowWidth} />
          </Route>
          <Route exact path="/country/:name">
            <CountryPage windowWidth={windowWidth} />
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

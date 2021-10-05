import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import storeFactory from "./redux/store";
import { Provider } from "react-redux";

const reduxStore = storeFactory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const storeFactory = () => {
  const middlewares = [thunk];

  const getLocalStorage = () => {
    const persistedStateString = localStorage.getItem("persistedState");
    const persistedState = persistedStateString
      ? JSON.parse(persistedStateString)
      : [];
    console.log("first state", persistedState);

    return persistedState;
  };

  const reduxStore = createStore(
    rootReducer,
    getLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  reduxStore.subscribe(() => {
    localStorage.setItem(
      "persistedState",
      JSON.stringify(reduxStore.getState())
    );
  });

  return reduxStore;
};

export default storeFactory;

import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const storeFactory = () => {
  const middlewares = [thunk];
  const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return reduxStore;
};

export default storeFactory;

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const storeFactory = () => {
  const reduxStore = createStore(reducer, composeWithDevTools());
  return reduxStore;
};

export default storeFactory;

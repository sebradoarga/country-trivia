import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  countryReducer,
  themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

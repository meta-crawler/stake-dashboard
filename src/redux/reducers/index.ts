import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const RootReducer = combineReducers({
  theme: themeReducer,
});

export default RootReducer;

import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer
});

export default rootReducer;

import { combineReducers } from "redux";

import cars from "./cars";
import cart from "./cart";

const rootReducer = combineReducers({
  carsStore: cars,
  cartStore: cart,
});

export default rootReducer;

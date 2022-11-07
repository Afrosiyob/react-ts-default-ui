import { combineReducers } from "redux";

import { counterReducer } from "./../components/counter/reducer/index";

export const rootReducer = combineReducers({
  // reducer
  counterReducer,
});

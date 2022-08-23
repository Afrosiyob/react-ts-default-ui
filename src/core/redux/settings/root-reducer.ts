import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "core/redux/components/auth/reducer/reducer";

export const rootReducer = combineReducers({
  authReducer,
});

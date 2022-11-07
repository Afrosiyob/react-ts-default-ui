import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../components/counter/reducer";

export const rootActions = {
  DECREMENT: decrement,
  INCREMENT: increment,
  INCREMENT_BY_VALUE: incrementByValue,
  RESET: reset,
};

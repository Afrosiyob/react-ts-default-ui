import { all } from "redux-saga/effects";

import counterSaga from "../components/counter/saga";

export default function* rootSaga(): Generator {
  yield all([
    // saga()
    counterSaga(),
  ]);
}

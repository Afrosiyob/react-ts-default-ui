import { all } from "redux-saga/effects";

import watcherCounter from "./watchers";

export default function* counterSaga(): Generator {
  yield all([watcherCounter]);
}

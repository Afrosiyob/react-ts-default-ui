import { all, fork } from "redux-saga/effects";

import watchAuthLogin from "./watchers";

export default function* authSaga() {
  yield all([fork(watchAuthLogin)]);
}

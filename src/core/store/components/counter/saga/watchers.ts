import { takeEvery } from "redux-saga/effects";

import { rootActions } from "./../../../settings/root-action";
import workerCounter from "./workers";

export default function* watcherCounter(): Generator {
  yield takeEvery(rootActions.INCREMENT.type, workerCounter);
}

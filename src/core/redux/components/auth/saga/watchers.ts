import { rootActions } from "core/redux/settings/root-actions";
import { takeEvery } from "redux-saga/effects";

import { workerAuthLogin } from "./workers";

export default function* watchAuthLogin() {
  yield takeEvery(rootActions.authLogin.type, workerAuthLogin);
}

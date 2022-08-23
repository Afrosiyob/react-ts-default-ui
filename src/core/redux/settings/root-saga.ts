import authSaga from "core/redux/components/auth/saga/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authSaga()]);
}

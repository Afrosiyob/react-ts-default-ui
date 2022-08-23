import { PayloadAction } from "@reduxjs/toolkit";
import { _IPayload, _IResponseAuth } from "core/interfaces/interfaces";
import { rootActions } from "core/redux/settings/root-actions";
import { authLoginRequest } from "core/services/api/verbs";
import { setStorage } from "core/services/storege/storage";
import { call, put } from "redux-saga/effects";

export function* workerAuthLogin({ payload }: PayloadAction<_IPayload>) {
  const { response } = yield call(authLoginRequest, payload);

  if (response) {
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: tokenType,
      authorities: permissions,
      user,
    } = response as _IResponseAuth;

    setStorage("access_token", accessToken);
    setStorage("refresh_token", refreshToken);
    setStorage("token_type", tokenType);

    yield put(
      rootActions.authLoginSuccess({
        permissions,
        user,
      })
    );
  } else {
    yield put(rootActions.authLoginError("no response"));
  }
}

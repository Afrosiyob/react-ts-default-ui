import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { configs } from "core/configs/configs";

import { rootReducer as reducer } from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (configs.app.appType === "development") {
  // eslint-disable-next-line global-require
  const { logger } = require("redux-logger");

  middleware.push(logger);
}

export const store = configureStore({
  reducer,
  devTools: true,
  middleware,
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

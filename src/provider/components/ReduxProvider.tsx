import React, { ReactElement } from "react";
import { _IReactElement } from "core/interfaces";
import { store } from "core/store/settings/toolkit";
import { Provider } from "react-redux";

function ReduxProvider({ children }: _IReactElement): ReactElement {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;

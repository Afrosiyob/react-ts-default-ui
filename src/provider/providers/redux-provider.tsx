import { _IProvider } from "core/interfaces/interfaces";
import { store } from "core/redux/settings/toolkit";
import { Provider } from "react-redux";

function ReduxProvider({ children }: _IProvider) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;

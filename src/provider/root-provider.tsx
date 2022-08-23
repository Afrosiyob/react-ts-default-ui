import { Suspense } from "react";
import { _IProvider } from "core/interfaces/interfaces";

import ReduxProvider from "./providers/redux-provider";

function RootProvider({ children }: _IProvider) {
  return (
    <ReduxProvider>
      <Suspense fallback={<div>...loading</div>}>{children}</Suspense>
    </ReduxProvider>
  );
}

export default RootProvider;

import { ReactElement, Suspense } from "react";
import { _IReactElement } from "core/interfaces";

import ReactQueryProvider from "./components/ReactQueryProvider";
import ReduxProvider from "./components/ReduxProvider";

function RootProvider({ children }: _IReactElement): ReactElement {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <Suspense fallback={<div> ...loading </div>}>{children}</Suspense>
      </ReactQueryProvider>
    </ReduxProvider>
  );
}

export default RootProvider;

import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "core/store/hooks";
import { rootActions } from "core/store/settings/root-action";

export default function App(): ReactElement {
  const { counter } = useAppSelector((state) => state.counterReducer);

  const dispatch = useAppDispatch();

  return (
    <div>
      {counter}

      <button onClick={() => dispatch(rootActions.INCREMENT())}>
        increment
      </button>

      <button onClick={() => dispatch(rootActions.INCREMENT_BY_VALUE(10))}>
        increment 10
      </button>

      <button onClick={() => dispatch(rootActions.DECREMENT())}>
        decrement
      </button>

      <button onClick={() => dispatch(rootActions.RESET())}>reset</button>
    </div>
  );
}

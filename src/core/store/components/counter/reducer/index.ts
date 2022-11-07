import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { _ICounter } from "core/interfaces";

const initialState: _ICounter = {
  counter: 0,
};

const { actions, reducer } = createSlice({
  name: "COUNTER",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
    incrementByValue: (state, { payload }: PayloadAction<number>) => {
      state.counter += payload;
    },
  },
});

export const { increment, incrementByValue, decrement, reset } = actions;

export const counterReducer = reducer;

import { configureStore } from "@reduxjs/toolkit";
import questionDataSlice from "../ReduxSlice/questionDataSlice";

export const Store = configureStore({
  reducer: {
    data: questionDataSlice,
  },
});

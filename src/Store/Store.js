import { configureStore } from "@reduxjs/toolkit";
import ansSlice from "../ReduxSlice/ansSlice";
import questionsDataSlice from "../ReduxSlice/questionDataSlice";

export const Store = configureStore({
  reducer: {
    ans: ansSlice,
    questionsData: questionsDataSlice,
  },
});

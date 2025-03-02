import { configureStore } from "@reduxjs/toolkit";
import ansSlice from "../ReduxSlice/ansSlice";

export const Store = configureStore({
  reducer: {
    ans: ansSlice,
  },
});

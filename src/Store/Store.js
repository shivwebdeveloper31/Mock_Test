import { configureStore } from "@reduxjs/toolkit";
import questionDataSlice from "../ReduxSlice/questionDataSlice";
import showNavListSlice from "../ReduxSlice/showNavListSlice";
export const Store = configureStore({
  reducer: {
    data: questionDataSlice,
    navList: showNavListSlice,
  },
});

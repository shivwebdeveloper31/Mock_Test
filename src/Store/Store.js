import { configureStore } from "@reduxjs/toolkit";
import ansSlice from "../ReduxSlice/ansSlice";
import questionsDataSlice from "../ReduxSlice/questionDataSlice";
import quizSlice from "../ReduxSlice/quizSlice";
import testSlice from "../ReduxSlice/testSlice";

export const Store = configureStore({
  reducer: {
    ans: ansSlice,
    quiz: quizSlice,
    questionsData: questionsDataSlice,
    demo: testSlice,
  },
});

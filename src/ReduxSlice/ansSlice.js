import { createSlice } from "@reduxjs/toolkit";

const ansSlice = createSlice({
  name: "ans",
  initialState: {
    time: 0,
    questionId: "",
    marked: false,
    isAnsGet: false,
  },
  reducers: {
    getQuestionId: (state, action) => {
      state.questionId = action.payload;
    },
    handelIsAnsGet: (state) => {
      state.isAnsGet = true;
    },
  },
});

export default ansSlice.reducer;
export const { getQuestionId, handelIsAnsGet } = ansSlice.actions;

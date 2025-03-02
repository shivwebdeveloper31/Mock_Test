import { createSlice } from "@reduxjs/toolkit";

const ansSlice = createSlice({
  name: "ans",
  initialState: {
    currentQuestionIndex: 0,
    userResponses: {}, // { questionId: { answer: "option", status: "saved/review" } }
    reviewList: [],
  },
  reducers: {
    savAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userResponses[questionId] = { answer, status: "saved" };
    },
  },
});

export default ansSlice.reducer;
export const { getQuestionId, handelIsAnsGet } = ansSlice.actions;

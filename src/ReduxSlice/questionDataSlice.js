import { createSlice } from "@reduxjs/toolkit";

const questionDataSlice = createSlice({
  name: "questionsData",
  initialState: {
    data: [],
  },
  reducers: {
    handelQuestionsData: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },
  },
});

export default questionDataSlice.reducer;
export const { handelQuestionsData } = questionDataSlice.actions;

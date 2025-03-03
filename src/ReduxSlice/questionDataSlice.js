import { createSlice } from "@reduxjs/toolkit";

const questionDataSlice = createSlice({
  name: "data",
  initialState: {
    answered: [],
    marked: [],
    markedAnswered: [],
    notAnswered: [],
  },

  reducers: {
    addData: (state, action) => {
      const { arrayName, mainData } = action.payload;
      state[arrayName].push(mainData);
    },
  },
});

export default questionDataSlice.reducer;
export const { addData } = questionDataSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const showNavListSlice = createSlice({
  name: "navList",
  initialState: {
    isNavListOpen: true,
  },
  reducers: {
    handelNavList: (state) => {
      state.isNavListOpen = !state.isNavListOpen;
    },
  },
});

export default showNavListSlice.reducer;
export const { handelNavList } = showNavListSlice.actions;

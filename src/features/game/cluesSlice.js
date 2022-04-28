import { createSlice } from "@reduxjs/toolkit";

export const cluesSlice = createSlice({
  name: "clues",
  initialState: {
    value: [
      { number: 1, isChecked: false },
      { number: 2, isChecked: false },
    ],
  },
  reducers: {
    checkClue: (state, action) => {
      state.value[action.payload].isChecked = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkClue } = cluesSlice.actions;

export default cluesSlice.reducer;

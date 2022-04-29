import { createSlice } from "@reduxjs/toolkit";

export const cluesSlice = createSlice({
  name: "clues",
  initialState: {
    value: [],
  },
  reducers: {
    setInitialState: (state, action) => {
      state.value = action.payload;
    },
    checkClue: (state, action) => {
      state.value[action.payload[0]][action.payload[1]].isChecked = true;
    },
    markAsTrueIfTrue: (state, action) => {
      state.value[action.payload[0]][action.payload[1]].isTrue =
        action.payload[2];
    },
    renewClues: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInitialState, checkClue, renewClues, markAsTrueIfTrue } =
  cluesSlice.actions;

export default cluesSlice.reducer;

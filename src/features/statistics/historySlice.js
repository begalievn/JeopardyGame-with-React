import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    value: [],
  },
  reducers: {
    addHistory: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload);
    },
    clearHistory: (state) => {
      state.value = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const starterSlice = createSlice({
  name: "starter",
  initialState: {
    value: false,
  },
  reducers: {
    startGame: (state) => {
      state.value = true;
    },
    finishGame: (state) => {
      state.value = false;
    },
  },
});

export const { startGame, finishGame } = starterSlice.actions;
export default starterSlice.reducer;

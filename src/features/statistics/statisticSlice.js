import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsQuantity: 0,
  trueAnswers: 0,
  wrongAnswers: 0,
  scores: 0,
  creationTime: 0,
  finishTime: 0,
};

export const statisticSlice = createSlice({
  name: "statistic",
  initialState: {
    value: initialState,
  },
  reducers: {
    updateScore: (state, action) => {
      state.value.scores += action.payload;
    },
  },
});

export const { updateScore } = statisticSlice.actions;

export default statisticSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  questionsQuantity: 0,
  trueAnswers: 0,
  wrongAnswers: 0,
  scores: 0,
  creationTime: "now",
  finishTime: "finished time",
};

export const statisticSlice = createSlice({
  name: "statistic",
  initialState: {
    value: initState,
  },
  reducers: {
    updateStatistics: (state, action) => {
      state.value.scores += action.payload;
      // increase question quantity
      state.value.questionsQuantity++;
      // if true
      action.payload > 0
        ? state.value.trueAnswers++
        : state.value.wrongAnswers++;
    },
    addCreationTime: (state) => {
      let date = new Date();
      state.value.creationTime = `${date.getDate()}.${
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
      }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
    addFinishTime: (state) => {
      let date = new Date();
      state.value.finishTime = `${date.getDate()}.${
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
      }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      console.log(state.value.finishTime);
    },
    clearStatistics: (state) => {
      state.value = {
        questionsQuantity: 0,
        trueAnswers: 0,
        wrongAnswers: 0,
        scores: 0,
        creationTime: "now",
        finishTime: 0,
      };
    },
  },
});

export const {
  updateStatistics,
  addCreationTime,
  clearStatistics,
  addFinishTime,
} = statisticSlice.actions;

export default statisticSlice.reducer;

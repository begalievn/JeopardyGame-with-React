import { configureStore } from "@reduxjs/toolkit";
import cluesReducer from "../features/game/cluesSlice";
import counterReducer from "../features/counter/counterSlice";
import statisticsReducer from "../features/statistics/statisticSlice";

export default configureStore({
  reducer: {
    clues: cluesReducer,
    counter: counterReducer,
    statistics: statisticsReducer,
  },
});

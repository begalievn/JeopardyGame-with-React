import { configureStore } from "@reduxjs/toolkit";
import cluesReducer from "../features/game/cluesSlice";
import counterReducer from "../features/counter/counterSlice";
import statisticsReducer from "../features/statistics/statisticSlice";
import historyReducer from "../features/statistics/historySlice";
import starterReducer from "../features/game/starterSlice";
import loggedReduer from "../features/game/loggedSlice";

export default configureStore({
  reducer: {
    clues: cluesReducer,
    counter: counterReducer,
    statistic: statisticsReducer,
    history: historyReducer,
    starter: starterReducer,
    logged: loggedReduer,
  },
});

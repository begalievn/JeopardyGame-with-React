import { configureStore } from "@reduxjs/toolkit";
import cluesReducer from "../features/game/cluesSlice";
import statisticsReducer from "../features/statistics/statisticSlice";
import historyReducer from "../features/statistics/historySlice";
import starterReducer from "../features/game/starterSlice";
import loggedReduer from "../features/game/loggedSlice";
import nameReducer from "../features/statistics/nameSlice";

export default configureStore({
  reducer: {
    clues: cluesReducer,
    statistic: statisticsReducer,
    history: historyReducer,
    starter: starterReducer,
    logged: loggedReduer,
    name: nameReducer,
  },
});

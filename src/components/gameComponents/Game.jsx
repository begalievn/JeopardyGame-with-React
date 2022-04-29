import { useEffect, useState } from "react";
import classes from "./Game.module.css";
import { getClues } from "../../api";
import { takeOutCategories } from "../../helperFunctions/takeOutCategories";
import TableOfClues from "./TableOfClues";
import { useSelector, useDispatch } from "react-redux";

// Imported actions
import {
  updateStatistics,
  addCreationTime,
  clearStatistics,
  addFinishTime,
} from "../../features/statistics/statisticSlice";
import { setInitialState, renewClues } from "../../features/game/cluesSlice";
import { startGame, finishGame } from "../../features/game/starterSlice";
import { login } from "../../features/game/loggedSlice";
import { addHistory } from "../../features/statistics/historySlice";

// Imported Components
import InputName from "../InputName";

function Game() {
  const statistics = useSelector((state) => state.statistic.value);
  const clues = useSelector((state) => state.clues.value);
  const starter = useSelector((state) => state.starter.value);
  const logged = useSelector((state) => state.logged.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (clues.length === 0) {
      getClues().then((data) => {
        dispatch(setInitialState(takeOutCategories(data)));
      });
    }
  }, [clues.length]);

  console.log(clues);

  return (
    <>
      {!logged ? (
        <InputName />
      ) : !starter ? (
        <div className={classes.startButtonContainer}>
          <button
            className={classes.startButton}
            onClick={() => {
              dispatch(startGame());
              dispatch(addCreationTime());
            }}
          >
            Start!
          </button>
        </div>
      ) : (
        <div className={classes.game}>
          {clues.length > 0 ? (
            <TableOfClues clues={clues} />
          ) : (
            <p>Loading...</p>
          )}

          <div className={classes.gameStatus}>
            <div className={classes.statusResponse}>
              <p className={classes.statusText}>Answered status</p>
              <p className={classes.statusScore}>score</p>
            </div>
            <div className={classes.scoreDiv}>Score: {statistics.scores}</div>
          </div>
          <div className={classes.buttonContainer}>
            <button
              onClick={() => {
                // *** Change below line later to finished time
                dispatch(addFinishTime());
                console.log(statistics);
                dispatch(addHistory(statistics));
                dispatch(renewClues());
                dispatch(clearStatistics());
                dispatch(finishGame());
                console.log("button clicked");
                console.log(clues);
              }}
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;

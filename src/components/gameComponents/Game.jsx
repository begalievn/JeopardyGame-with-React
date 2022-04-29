import { useEffect, useState } from "react";
import classes from "./Game.module.css";
import { getClues } from "../../api";
import { takeOutCategories } from "../../helperFunctions/takeOutCategories";
import TableOfClues from "./TableOfClues";
import { useSelector, useDispatch } from "react-redux";

// Imported actions
import {
  addCreationTime,
  clearStatistics,
  addFinishTime,
} from "../../features/statistics/statisticSlice";
import { setInitialState, renewClues } from "../../features/game/cluesSlice";
import { startGame, finishGame } from "../../features/game/starterSlice";

import { addHistory } from "../../features/statistics/historySlice";

// Imported Components
import InputName from "../InputName";

function Game() {
  const statistic = useSelector((state) => state.statistic.value);
  const clues = useSelector((state) => state.clues.value);
  const starter = useSelector((state) => state.starter.value);
  const logged = useSelector((state) => state.logged.value);

  const [responseStatus, setResponseStatus] = useState("Choose the clue");
  const [responseScore, setResponseScore] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (clues.length === 0) {
      getClues().then((data) => {
        dispatch(setInitialState(takeOutCategories(data)));
      });
    }
  }, [clues.length]);

  function finishHandler() {
    dispatch(addFinishTime());
    const date = new Date();
    let finishTime = `${date.getDate()}.${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    dispatch(addHistory({ ...statistic, finishTime: finishTime }));
    setTimeout(() => {
      dispatch(renewClues());
      dispatch(clearStatistics());
      dispatch(finishGame());
    }, 1000);
  }

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
            <TableOfClues
              clues={clues}
              setResponseStatus={setResponseStatus}
              setResponseScore={setResponseScore}
            />
          ) : (
            <p>Loading...</p>
          )}

          <div className={classes.gameStatus}>
            {responseScore === 0 ? null : responseScore > 0 ? (
              <div className={classes.statusResponseCorrect}>
                <p className={classes.statusText}>{responseStatus}</p>
                <p className={classes.statusScore}>{responseScore}</p>
              </div>
            ) : (
              <div className={classes.statusResponseWrong}>
                <p className={classes.statusText}>{responseStatus}</p>
                <p className={classes.statusScore}>{responseScore}</p>
              </div>
            )}

            <div className={classes.scoreDiv}>Score: {statistic.scores}</div>
          </div>
          <div className={classes.buttonContainer}>
            <button
              onClick={() => {
                finishHandler();
              }}
              className={classes.finishButton}
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

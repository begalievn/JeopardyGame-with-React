import React from "react";
import classes from "./Statistics.module.css";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  clearStatistics,
  addFinishTime,
} from "../../features/statistics/statisticSlice";
import { renewClues } from "../../features/game/cluesSlice";
import { finishGame } from "../../features/game/starterSlice";

import {
  addHistory,
  clearHistory,
} from "../../features/statistics/historySlice";

function Statistics() {
  const statistics = useSelector((state) => state.statistic.value);
  const history = useSelector((state) => state.history.value);
  const starter = useSelector((state) => state.starter.value);
  const name = useSelector((state) => state.name.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function finishHandler() {
    dispatch(addFinishTime());
    const date = new Date();
    let finishTime = `${date.getDate()}.${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    dispatch(addHistory({ ...statistics, finishTime: finishTime }));
    setTimeout(() => {
      dispatch(renewClues());
      dispatch(clearStatistics());
      dispatch(finishGame());
    }, 1000);
  }

  return (
    <div className={classes.statistics}>
      <div className={classes.currentGame}>
        <div className={classes.currentTitle}>
          <h5>Current Game</h5>
        </div>
        <div className={classes.currentTableContainer}>
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr>
                <th>Имя</th>
                <th>Кол-во вопросов</th>
                <th>Верных ответов</th>
                <th>Неверных ответов</th>
                <th>Сумма баллов</th>
                <th>Создано</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {!starter ? null : (
                <tr>
                  <td>{name}</td>
                  <td>{statistics.questionsQuantity}</td>
                  <td>{statistics.trueAnswers}</td>
                  <td>{statistics.wrongAnswers}</td>
                  <td>{statistics.scores}</td>
                  <td>{statistics.creationTime}</td>
                  <td>
                    <div className={classes.currentGameButtonsContainer}>
                      <button
                        onClick={() => {
                          navigate("/");
                        }}
                        className={classes.continueButton}
                      >
                        Continue
                      </button>
                      <button
                        onClick={() => {
                          finishHandler();
                        }}
                        className={classes.finishButton}
                      >
                        Finish
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.gameHistory}>
        <div className={classes.historyTitle}>
          <h5>Games History</h5>
          <button
            className={classes.button}
            onClick={() => {
              dispatch(clearHistory());
            }}
          >
            Clear
          </button>
        </div>
        <div className={classes.historyTalbeContainer}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Имя</th>
                <th>Кол-во вопросов</th>
                <th>Верных ответов</th>
                <th>Неверных ответов</th>
                <th>Сумма баллов</th>
                <th>Создано</th>
                <th>Завершено</th>
              </tr>
            </thead>
            <tbody>
              {history.map((stata) => {
                return (
                  <tr key={stata?.creationTime}>
                    <td>{name}</td>
                    <td>{stata?.questionsQuantity}</td>
                    <td>{stata?.trueAnswers}</td>
                    <td>{stata?.wrongAnswers}</td>
                    <td>{stata?.scores}</td>
                    <td>{stata?.creationTime}</td>
                    <td>{stata?.finishTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

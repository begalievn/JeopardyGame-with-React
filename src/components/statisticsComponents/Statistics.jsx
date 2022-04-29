import React from "react";
import classes from "./Statistics.module.css";
import { useSelector, useDispatch } from "react-redux";
import {} from "../../features/statistics/statisticSlice";
import { clearHistory } from "../../features/statistics/historySlice";

function Statistics() {
  const statistics = useSelector((state) => state.statistic.value);
  const history = useSelector((state) => state.history.value);

  const dispatch = useDispatch();

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
                <th>Кол-во вопросов</th>
                <th>Верных ответов</th>
                <th>Неверных ответов</th>
                <th>Сумма баллов</th>
                <th>Создано</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{statistics.questionsQuantity}</td>
                <td>{statistics.trueAnswers}</td>
                <td>{statistics.wrongAnswers}</td>
                <td>{statistics.scores}</td>
                <td>{statistics.creationTime}</td>
                <td>
                  <div className={classes.currentGameButtonsContainer}>
                    <button>Continue</button>
                    <button>Finish</button>
                  </div>
                </td>
              </tr>
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
                <th>Кол-во вопросов</th>
                <th>Верных ответов</th>
                <th>Неверных ответов</th>
                <th>Сумма баллов</th>
                <th>Создано</th>
                <th>Завершено</th>
              </tr>
            </thead>
            <tbody>
              {history.map((statistics) => {
                return (
                  <tr>
                    <td>{statistics.questionsQuantity}</td>
                    <td>{statistics.trueAnswers}</td>
                    <td>{statistics.wrongAnswers}</td>
                    <td>{statistics.scores}</td>
                    <td>{statistics.creationTime}</td>
                    <td>{statistics.finishTime}</td>
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

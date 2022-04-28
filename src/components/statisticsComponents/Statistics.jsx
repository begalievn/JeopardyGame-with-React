import React from "react";
import classes from "./Statistics.module.css";

function Statistics() {
  return (
    <div className={classes.statistics}>
      <div className={classes.currentGame}>
        <div className={classes.currentTitle}>
          <h4>Current Game</h4>
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
                <td>Data</td>
                <td>Data2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.gameHistory}>
        <div className={classes.historyTitle}>
          <h4>Games History</h4>
          <button>Clear the history</button>
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
                <th>Действия</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

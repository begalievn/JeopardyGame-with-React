import { useEffect, useState } from "react";
import classes from "./Game.module.css";
import { getClues } from "../../api";

import { takeOutCategories } from "../../helperFunctions/takeOutCategories";

import TableOfClues from "./TableOfClues";
import AnsweredStatus from "./AnsweredStatus";
import ScoreCounter from "./ScoreCounter";
import LaunchGameButton from "./LaunchGameButton";

function Game() {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    if (localStorage.clues === undefined) {
      getClues().then((data) => {
        setClues(takeOutCategories(data));
      });
    }
  }, []);

  return (
    <div className={classes.game}>
      {clues.length > 0 ? <TableOfClues clues={clues} /> : <p>Loading...</p>}

      <div className={classes.gameStatus}>
        <AnsweredStatus />
        <ScoreCounter />
      </div>
      <LaunchGameButton />
    </div>
  );
}

export default Game;

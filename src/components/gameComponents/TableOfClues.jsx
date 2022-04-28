import classes from "./TableOfClues.module.css";
import { displayClues } from "../../helperFunctions/displayClues";

function TableOfClues({ clues }) {
  console.log(clues);

  return (
    <div className={classes.container}>{displayClues(clues, classes)}</div>
  );
}

export default TableOfClues;

import classes from "./LaunchGameButton.module.css";

function LaunchGameButton() {
  return (
    <div className={classes.container}>
      <button className={classes.button}>Start the Game</button>
    </div>
  );
}

export default LaunchGameButton;

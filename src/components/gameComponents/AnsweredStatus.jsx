import classes from "./AnsweredStatus.module.css";

function AnsweredStatus() {
  return (
    <div className={classes.container}>
      <div className={classes.statusTitle}>Status title</div>
      <div className={classes.statusScore}>100</div>
    </div>
  );
}

export default AnsweredStatus;

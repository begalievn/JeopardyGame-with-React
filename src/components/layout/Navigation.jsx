import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.h1title}>
        <Link className={classes.link} to="/">
          Jeopardy game
        </Link>
      </h1>
      <div className={classes.rightLinksDiv}>
        <Link className={classes.link} to="/statistics">
          Statistics
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;

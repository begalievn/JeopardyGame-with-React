export const displayClues = (clues, classes) => {
  // clues are array wihin which contains 5 arrays

  return clues.map((clues, index) => {
    return (
      <div className={classes.category} key={index}>
        <div className={classes.categoryName}>
          <h4> {clues[0].category.title} </h4>
        </div>
        <div className={classes.categoryClues}>
          {clues.map((clue) => (
            <div key={clue.id} id={clue.id} className={classes.clue}>
              {clue.value}
            </div>
          ))}
        </div>
      </div>
    );
  });
};

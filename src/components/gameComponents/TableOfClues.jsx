import classes from "./TableOfClues.module.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

// Imported actions
import { checkClue, markAsTrueIfTrue } from "../../features/game/cluesSlice";
import { updateStatistics } from "../../features/statistics/statisticSlice";
function TableOfClues({ clues, setResponseStatus, setResponseScore }) {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedClue, setSelectedClue] = useState([0, 0]);
  const [inputText, setInputText] = useState("");
  const [currentClueAnswer, setCurrentClueAnswer] = useState("");
  const [currentClueValue, setCurrentClueValue] = useState(0);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (isModalVisible) {
      timer > 0 &&
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
    }
    if (timer === 0) {
      hideModal();
      submitHandler();
    }
  }, [timer, isModalVisible]);

  const displayClues = (clues, classes) => {
    // clues are array wihin which contains 5 arrays

    return clues.map((clues, index) => {
      return (
        <div className={classes.category} key={index}>
          <div className={classes.categoryName}>
            <h6> {clues[0].category.title} </h6>
          </div>
          <div className={classes.categoryClues}>
            {clues.map((clue, i) => (
              <div
                key={clue.id}
                id={`${index}_${clue.id}`}
                className={classes.clue}
                onClick={() => {
                  setSelectedClue([index, i]);
                  setCurrentClueAnswer(clue.answer);
                  setCurrentClueValue(clue.value);
                  showModal();
                }}
              >
                {clue.isChecked ? (
                  clue.isTrue ? (
                    <div className={classes.trueAnswer}>True</div>
                  ) : (
                    <div className={classes.falseAnswer}>False</div>
                  )
                ) : (
                  clue.value
                )}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  // Handle Clues actions

  function showModal() {
    setModalVisible(true);
    setTimer(60);
  }

  function hideModal() {
    setModalVisible(false);
  }

  function submitHandler() {
    dispatch(checkClue(selectedClue));
    console.log(currentClueAnswer);
    currentClueAnswer === inputText
      ? dispatch(markAsTrueIfTrue([...selectedClue, true]))
      : dispatch(markAsTrueIfTrue([...selectedClue, false]));
    let scoreValue = 0;
    currentClueAnswer === inputText
      ? (scoreValue += currentClueValue)
      : (scoreValue -= currentClueValue);
    if (currentClueAnswer === inputText) {
      setResponseStatus("Correct answers");
      setResponseScore(currentClueValue);
    } else {
      setResponseStatus("Wrong answer");
      setResponseScore(-currentClueValue);
    }

    dispatch(updateStatistics(scoreValue));
    hideModal();
    setInputText("");
  }

  return (
    <>
      <div className={classes.container}>{displayClues(clues, classes)}</div>
      <Modal
        title={clues[selectedClue[0]][selectedClue[1]].question}
        visible={isModalVisible}
        onOk={() => {
          submitHandler();
        }}
        onCancel={hideModal}
      >
        <p>Answer: {clues[selectedClue[0]][selectedClue[1]].answer}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <p>Remaining time: {timer}</p>
        </form>
      </Modal>
    </>
  );
}

export default TableOfClues;

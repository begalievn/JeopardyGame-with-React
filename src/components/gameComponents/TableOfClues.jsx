import classes from "./TableOfClues.module.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { checkClue } from "../../features/game/cluesSlice";
function TableOfClues({ clues }) {
  console.log(clues);

  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedClue, setSelectedClue] = useState([0, 0]);
  const [inputText, setInputText] = useState("");
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
    }
  }, [timer, isModalVisible]);

  function showModal() {
    setModalVisible(true);
    setTimer(60);
  }

  function hideModal() {
    setModalVisible(false);
  }

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
                onClick={(e) => {
                  setSelectedClue([index, i]);
                  showModal();

                  // setTimeout(() => {
                  //   hideModal();
                  // }, 3000);
                }}
              >
                {clue.isChecked ? "checked" : clue.value}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className={classes.container}>{displayClues(clues, classes)}</div>
      <Modal
        title={clues[selectedClue[0]][selectedClue[1]].question}
        visible={isModalVisible}
        onOk={() => {
          dispatch(checkClue(selectedClue));
          hideModal();
        }}
        onCancel={hideModal}
      >
        <p>Answer: {clues[selectedClue[0]][selectedClue[1]].answer}</p>
        <form>
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

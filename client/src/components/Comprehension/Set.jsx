import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const Set = ({ setQuestionCount, questionNumber, handleDeleteQuestion }) => {
  return (
    <div style={{ border: "1px solid red", width: "90%", padding: "50px" }}>
      Set {questionNumber + 1}
      <AiOutlinePlusCircle onClick={() => setQuestionCount((prev) => prev + 1)} />
      <MdDeleteForever onClick={handleDeleteQuestion} />
    </div>
  );
};

export default Set;

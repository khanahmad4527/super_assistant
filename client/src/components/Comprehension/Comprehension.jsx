import React, { useState } from "react";
import Set from "./Set";

const Comprehension = ({ questionCount, setQuestionCount }) => {
  const handleDeleteQuestion = (questionNumber) => {
    setQuestionCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      {questionCount &&
        new Array(questionCount)
          .fill(0)
          .map((_, i) => (
            <Set
              key={i}
              questionNumber={i}
              setQuestionCount={setQuestionCount}
              handleDeleteQuestion={() => handleDeleteQuestion(i)}
            />
          ))}
    </div>
  );
};

export default Comprehension;

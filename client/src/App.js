import React, { useState } from "react";
import Comprehension from "./components/Comprehension/Comprehension";

const App = () => {
  const [questionCount, setQuestionCount] = useState(1);

  return (
    <div>
      <Comprehension questionCount={questionCount} setQuestionCount={setQuestionCount}/>
    </div>
  );
};

export default App;

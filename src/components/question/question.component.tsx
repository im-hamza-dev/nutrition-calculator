import React from "react";
import { generateInputElem } from "./helper";

interface QuestionProp {
  currentQuestion: any; // QuestionDetails;
}

const Question = (props: QuestionProp) => {
  let { currentQuestion } = props;

  let questionInput = generateInputElem(currentQuestion);
  return (
    <div className="questionWrapper">
      <p className="preQuestion">{currentQuestion?.preQuestion}</p>
      <p className="question">{currentQuestion?.question}</p>
      <p className="description">{currentQuestion?.description}</p>
      {questionInput}
    </div>
  );
};

export default Question;

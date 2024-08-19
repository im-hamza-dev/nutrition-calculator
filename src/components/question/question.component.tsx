import React from "react";
import "./question.scss";
import { generateInputElem } from "./helper";
import { QuestionDetails } from "../../utils/interfaces";
import { QuestionStates } from "../../context/questionsProvider";

const Question = () => {
  const { currentQuestionIndex, questionsArr } = QuestionStates();
  let currentQuestion = questionsArr[currentQuestionIndex];
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

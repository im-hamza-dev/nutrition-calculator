import React, { useEffect, useState } from "react";
import { QuestionStates } from "../../context/questionsProvider";
import "../question/question.scss";
const Number = () => {
  let { currentQuestionIndex, questionsArr, answers, setAnswers } =
    QuestionStates();

  const handleUpdateToAnswer = (age: number) => {
    let answers_ = structuredClone(answers);
    answers_.age = age;
    setAnswers(answers_);
  };
  let currentQuestion = questionsArr[currentQuestionIndex];
  console.log(currentQuestion);
  return (
    <div className="number-input">
      <input
        value={answers.age}
        type="number"
        onChange={(e) => handleUpdateToAnswer(parseInt(e.target.value))}
        min={currentQuestion?.validation?.min}
        max={currentQuestion?.validation?.max}
      />
    </div>
  );
};

export default Number;

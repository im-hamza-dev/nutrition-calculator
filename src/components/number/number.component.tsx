import React, { useEffect, useState } from "react";
import { QuestionStates } from "../../context/questionsProvider";
import "../question/question.scss";
const Number = () => {
  let { currentQuestionIndex, questionsArr, answers, setAnswers } =
    QuestionStates();

  const handleUpdateToAnswer = (age: number) => {
    let answers_ = structuredClone(answers);
    if (currentQuestion.id === "Q1") {
      answers_.age = age;
    } else {
      answers_.meals = age;
    }
    setAnswers(answers_);
  };
  let currentQuestion = questionsArr[currentQuestionIndex];
  console.log(currentQuestion);
  return (
    <div className="number-input">
      <input
        value={currentQuestion.id === "Q1" ? answers.age : answers.meals}
        type="number"
        onChange={(e) => handleUpdateToAnswer(parseInt(e.target.value))}
        min={currentQuestion?.validation?.min}
        max={currentQuestion?.validation?.max}
      />
    </div>
  );
};

export default Number;

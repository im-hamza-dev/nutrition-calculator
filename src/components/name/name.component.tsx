import React from "react";
import { QuestionStates } from "../../context/questionsProvider";
import "../question/question.scss";
const Name = () => {
  let { currentQuestionIndex, questionsArr, answers, setAnswers } =
    QuestionStates();

  const handleUpdateToAnswer = (value: string, key: string) => {
    let answers_ = structuredClone(answers);
    answers[key] = value;
    setAnswers(answers_);
  };
  let currentQuestion = questionsArr[currentQuestionIndex];
  console.log(currentQuestion);
  return (
    <div className="number-input">
      <input
        value={answers.name}
        type="text"
        placeholder="Name"
        onChange={(e) => handleUpdateToAnswer(e.target.value, "name")}
      />
      <input
        value={answers.email}
        type="email"
        placeholder="Email"
        onChange={(e) => handleUpdateToAnswer(e.target.value, "email")}
      />
    </div>
  );
};

export default Name;

import React, { useState } from "react";
import "./multipleChoice.component.scss";
import { QuestionStates } from "../../context/questionsProvider";

const MultipleChoice = () => {
  const [selectedOption, setSelectedOption] = useState("");
  let { currentQuestionIndex, questionsArr, answers, setAnswers } =
    QuestionStates();

  const handleSelect = (label: string) => {
    console.log("select gender", label);
    setSelectedOption(label);
    let answers_ = structuredClone(answers);
    if (currentQuestion.id === "Q2") {
      answers_.gender = label;
    }
    console.log("select gender 2", answers_);

    setAnswers(answers_);
  };
  let currentQuestion = questionsArr[currentQuestionIndex];
  return (
    <div className="exercise-option-selector">
      {currentQuestion?.options?.map((option: any) => (
        <div
          className={`exercise-option ${
            selectedOption === option.label ? "selected" : ""
          }`}
          onClick={() => handleSelect(option.label)}
        >
          {/* <img
            src={option.image}
            alt={option.label}
            className="exercise-image"
          /> */}
          <h3 className="exercise-label">{option.label}</h3>
          <p className="exercise-description">{option.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;

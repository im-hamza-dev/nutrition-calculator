import React, { useState } from "react";
import "./multipleChoice.component.scss";
import { QuestionStates } from "../../context/questionsProvider";

const MultipleChoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  let { currentQuestion, answers, setAnswers } = QuestionStates();

  const handleSelect = (id: any) => {
    setSelectedOption(id);
  };
  console.log(currentQuestion);
  return (
    <div className="exercise-option-selector">
      {currentQuestion?.options?.map((option: any) => (
        <div
          className={`exercise-option ${
            selectedOption === option.id ? "selected" : ""
          }`}
          onClick={() => handleSelect(option.id)}
        >
          <img
            src={option.image}
            alt={option.label}
            className="exercise-image"
          />
          <h3 className="exercise-label">{option.label}</h3>
          <p className="exercise-description">{option.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;

import React, { useEffect, useState } from "react";
import "./multipleChoice.component.scss";
import { QuestionStates } from "../../context/questionsProvider";

const MultipleChoice = () => {
  const [selectedOption, setSelectedOption] = useState("");
  let { currentQuestionIndex, questionsArr, answers, setAnswers } =
    QuestionStates();

  useEffect(() => {
    if (currentQuestion.id === "Q2") {
      setSelectedOption(answers.gender);
    } else if (currentQuestion.id === "Q5") {
      setSelectedOption(answers.goals);
    } else if (currentQuestion.id === "Q7") {
      setSelectedOption(answers.eatingStyle);
    } else if (currentQuestion.id === "Q8") {
      setSelectedOption(answers.macroRatio);
    } else if (currentQuestion.id === "Q10") {
      setSelectedOption(answers.activityLevel);
    } else if (currentQuestion.id === "Q11") {
      setSelectedOption(answers.exerciseLevel);
    }
  }, []);

  const handleSelect = (label: string) => {
    setSelectedOption(label);
    let answers_ = structuredClone(answers);
    if (currentQuestion.id === "Q2") {
      answers_.gender = label;
    } else if (currentQuestion.id === "Q5") {
      answers_.goals = label;
    } else if (currentQuestion.id === "Q7") {
      answers_.eatingStyle = label;
    } else if (currentQuestion.id === "Q8") {
      answers_.macroRatio = label;
    } else if (currentQuestion.id === "Q10") {
      answers_.activityLevel = label;
    } else if (currentQuestion.id === "Q11") {
      answers_.exerciseLevel = label;
    }

    setAnswers(answers_);
  };
  let currentQuestion = questionsArr[currentQuestionIndex];

  return (
    <div className="exercise-option-selector">
      {currentQuestion?.options?.map((option: any) => (
        <div
          className={`exercise-option ${
            currentQuestion.id === "Q2" ? "genderQ" : ""
          } ${selectedOption === option.label ? "selected" : ""}`}
          onClick={() => handleSelect(option.label)}
        >
          {option.image && (
            <img
              src={option.image}
              alt={option.label}
              className="exercise-image"
            />
          )}
          <h3 className="exercise-label">{option.label}</h3>
          <p className="exercise-description">{option.description}</p>
          {option.recommended && <p className="recommended">Recommended</p>}
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;

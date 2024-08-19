import React, { useState, useEffect, useContext } from "react";
import "./questionnaire.scss";
import {
  answersInitial,
  categories,
  questionsData,
} from "../../configs/questions";
import Question from "../../components/question/question.component";
import { QuestionStates } from "../../context/questionsProvider";

const Questionnaire = () => {
  const { handleBack, handleNext, currentQuestionIndex, questionsArr, error } =
    QuestionStates();
  let currentQuestion = questionsArr[currentQuestionIndex];
  return (
    // <div className="questionnaire-container">
    //   <div className="header">
    //     <button className="back-button">←</button>
    //     <h1>Precision Nutrition</h1>
    //   </div>
    //   <div className="tabs">
    //     <button className="tab active">Details</button>
    //     <button className="tab">Goals</button>
    //     <button className="tab">Diet</button>
    //     <button className="tab">Activity</button>
    //     <button className="tab">Results</button>
    //   </div>
    //   {currentQuestion && (
    //     <div className="question-container">
    //       <p className="question-category">
    //         Okay, first "{currentQuestion.category}" question.
    //       </p>
    //       <h2 className="question">{currentQuestion.question}</h2>
    //       <p className="disclaimer">(We won't tell!)</p>
    //       <input
    //         type={currentQuestion.type}
    //         min={currentQuestion.min}
    //         max={currentQuestion.max}
    //         value={answer}
    //         onChange={handleInputChange}
    //         className="answer-input"
    //       />
    //       <p className="input-range">
    //         Valid age is {currentQuestion.min}-{currentQuestion.max}
    //       </p>
    //       <button onClick={handleNext} className="next-button">
    //         NEXT
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="page-wrap">
      <div className="content-wrap">
        <button onClick={handleBack} className="nextButton">
          Back
        </button>
        <h2 className="heading">Nutrition Calculator</h2>
        <div className="hamburgerWrapper">
          {categories?.map((catg) => (
            <div
              className={`${
                catg === currentQuestion?.category ? "selected" : ""
              }`}
            >
              {catg}
            </div>
          ))}
        </div>
        <Question />
        <button
          className={`nextButton ${error ? "disabled" : ""}`}
          onClick={handleNext}
        >
          Next
        </button>
        <br />
        {error && <div>Invalid Answer!</div>}
      </div>
    </div>
  );
};

export default Questionnaire;

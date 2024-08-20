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
    <div className="page-wrap">
      <div className="content-wrap">
        <div className="backWrapper">
          <button onClick={handleBack} className="nextButton">
            Back
          </button>
          <div>{currentQuestionIndex + 1}/13</div>
        </div>
        <h2 className="heading">
          Precision Nutrition with "Zach Lloyd Transformation Coaching"
        </h2>
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

import React, { useState, useEffect, useContext } from "react";
import "./questionnaire.scss";
import {
  answersInitial,
  categories,
  questionsData,
} from "../../configs/questions";
import Question from "../../components/question/question.component";
import { QuestionStates } from "../../context/questionsProvider";
import Brand from "../../assets/images/brand.png";

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
          <div className="brandWrapper">
            <img src={Brand} alt="Fitness Coaching" className="brand" />{" "}
            <h2 className="heading">Calorie & Macro Calculator</h2>
            <h2>Zach Lloyd Coaching</h2>
          </div>
          <div>{currentQuestionIndex + 1}/13</div>
        </div>

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
        {currentQuestionIndex !== 12 && (
          <button
            className={`nextButton ${error ? "disabled" : ""}`}
            onClick={handleNext}
          >
            Next
          </button>
        )}
        <br />
        {error && <div>Invalid Answer!</div>}
      </div>
    </div>
  );
};

export default Questionnaire;

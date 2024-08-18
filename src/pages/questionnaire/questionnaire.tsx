import React, { useState, useEffect } from "react";
import "./questionnaire.scss";
import { questionsData } from "../../configs/questions";

const Questionnaire = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    let questionsData_ = structuredClone(questionsData);
    setQuestions(questionsData_);
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer("");
    }
  };

  const handleInputChange = (e: any) => {
    setAnswer(e.target.value);
  };

  const currentQuestion = questions[currentQuestionIndex];

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
        <div>Nutrition Calculator</div>
        <div>Hamburger</div>
        <div>
          <p>Pre-question</p>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;

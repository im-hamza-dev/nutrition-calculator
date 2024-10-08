import React, { createContext, useContext, useEffect, useState } from "react";
import { answersInitial, questionsData } from "../configs/questions";
import { QuestionDetails } from "../utils/interfaces";

const QuestionContext = createContext({} as any);

const QuestionProvider = ({ children }: any) => {
  const [questionsArr, setQuestionsArr] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    setQuestionsArr(questionsData);
    setAnswers(answersInitial);
  }, []);
  const handleNext = () => {
    console.log(answers);
    if (validateAnswer()) {
      setError(true);
      return;
    }
    setError(false);
    if (currentQuestionIndex < questionsArr?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const validateAnswer = () => {
    let validationFailed = false;
    let currentQ = questionsArr[currentQuestionIndex];
    if (currentQ.id === "Q1") {
      //age
      if (
        !(
          answers?.age &&
          answers.age <= currentQ.validation.max &&
          answers.age >= currentQ.validation.min
        )
      ) {
        validationFailed = true;
      }
    } else if (currentQ.id === "Q2") {
      //gender
      //age
      if (!answers?.gender) {
        validationFailed = true;
      }
    } else if (currentQ.id === "Q3") {
      //height
      //age
      if (
        !(
          answers?.height &&
          answers.height <= currentQ.validation.max &&
          answers.height >= currentQ.validation.min
        )
      ) {
        validationFailed = true;
      }
    } else if (currentQ.id === "Q4") {
      //weight
      if (
        !(
          answers?.weight &&
          answers.weight <= currentQ.validation.max &&
          answers.weight >= currentQ.validation.min
        )
      ) {
        validationFailed = true;
      }
    } else if (currentQ.id === "Q5") {
      //multipleChoice
    } else if (currentQ.id === "Q6") {
      //multipleChoice
    } else if (currentQ.id === "Q7") {
      //ratios
    } else if (currentQ.id === "Q8") {
      //diet//number
    } else if (currentQ.id === "Q9") {
      //multipleChoice
    } else if (currentQ.id === "Q10") {
      //multipleChoice
    }
    return validationFailed;
  };

  return (
    <QuestionContext.Provider
      value={{
        questionsArr,
        setQuestionsArr,
        answers,
        setAnswers,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        handleBack,
        handleNext,
        error,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const QuestionStates = () => {
  return useContext(QuestionContext);
};

export default QuestionProvider;

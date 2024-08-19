import React, { useEffect } from "react";
import { QuestionStates } from "../../context/questionsProvider";
import { calculateCalories } from "../../utils/helper";

const Summary = () => {
  const { answers } = QuestionStates();

  useEffect(() => {
    let calorieData = calculateCalories(answers);
    console.log(calorieData);
  }, [answers]);

  return <div className="questionWrapper">Summary </div>;
};

export default Summary;

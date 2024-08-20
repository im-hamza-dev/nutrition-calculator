import React, { useEffect, useState } from "react";
import { QuestionStates } from "../../context/questionsProvider";
import { calculateCalories, daysUntilDeadline } from "../../utils/helper";
import "./summary.scss";

const Summary = () => {
  const [caloriesData, setCaloriesData] = useState<any>(null);
  const [macros, setMacros] = useState<any>({
    protien: 0,
    carbs: 0,
    fats: 0,
  });
  const [macrosRatio, setMacrosRatio] = useState<any>({
    protien: 0,
    carbs: 0,
    fats: 0,
  });

  const { answers } = QuestionStates();

  useEffect(() => {
    let ratio = {
      protien: 0,
      carbs: 0,
      fats: 0,
    };
    if (answers.macroRatio === "Balanced") {
      ratio = {
        protien: 30,
        carbs: 35,
        fats: 35,
      };
    } else if ((answers.macroRatio = "Low-Fat")) {
      ratio = {
        protien: 30,
        carbs: 50,
        fats: 20,
      };
    } else if ((answers.macroRatio = "Low-Carb")) {
      ratio = {
        protien: 30,
        carbs: 20,
        fats: 50,
      };
    }
    let calorieData_: any = calculateCalories(answers);
    setCaloriesData(calorieData_);
    let macros_ = macros;
    macros_.protien = (calorieData_?.requiredCalories * ratio.protien) / 100;
    macros_.carbs = (calorieData_?.requiredCalories * ratio.carbs) / 100;
    macros_.fats = (calorieData_?.requiredCalories * ratio.fats) / 100;
  }, [answers]);
  const getMacroRatio = (label: string) => {
    let ratio = "30% Protien, 35% Carb, 35% Fat";
    if (label === "Balanced") {
      ratio = "30% Protien, 35% Carb, 35% Fat";
    } else if ((label = "Low-Fat")) {
      ratio = "30% Protien, 50% Carb, 20% Fat";
    } else if ((label = "Low-Carb")) {
      ratio = "30% Protien, 20% Carb, 50% Fat";
    }
    return ratio;
  };
  return (
    <div className="questionWrapper">
      <p>(Brief summary below)</p>
      <hr></hr>
      <h2>Brief Summary</h2>
      <div className="summaryRow">
        <div>Age</div>
        <div>{answers.age}</div>
      </div>
      <div className="summaryRow">
        <div>Current Weight</div>
        <div>{answers.weight}</div>
      </div>
      <div className="summaryRow">
        <div>Eating Style</div>
        <div>{answers.eatingStyle}</div>
      </div>
      <div className="summaryRow">
        <div>Macro Percentages</div>
        <div>{getMacroRatio(answers.macroRatio)}</div>
      </div>
      <div className="summary-metrics">
        <p>
          To maintain your current weight requires about {caloriesData?.TDEE}{" "}
          Calories per day.
        </p>
        <p>
          To reach your goal of {answers.targetWeight} in{" "}
          {daysUntilDeadline(answers.targetDate)} at your current body weight
          and activity level, requires about:
        </p>
        <h3>{caloriesData?.requiredCalories} Calories per day.</h3>
      </div>
      <h2>HERE'S HOW THAT BREAKS DOWN:</h2>
      <div>Protien: {macros.protien / 4}</div>
      <div>Carbs: {macros.carbs / 4}</div>
      <div>Fat: {macros.fats / 9}</div>
    </div>
  );
};

export default Summary;

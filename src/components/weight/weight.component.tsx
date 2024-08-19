import React, { useEffect, useState } from "react";
import "./weight.component.scss";
import { QuestionStates } from "../../context/questionsProvider";

const Weight = () => {
  const [unit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(null);
  const [targetDate, setTargetDate] = useState("");
  let { answers, setAnswers, currentQuestionIndex, questionsArr } =
    QuestionStates();
  let currentQuestion = questionsArr[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion.id === "Q6") {
      setWeight(answers.targetWeight);
      setTargetDate(answers.targetDate);
    }
  }, []);

  const handleUnitChange = (unit: any) => {
    setWeight(null);
    setUnit(unit);
  };

  const convertToKg = (pounds: number) => {
    const kgPerPound = 0.45359237; // 1 pound is approximately 0.45359237 kilograms
    const kilograms = pounds * kgPerPound;
    return kilograms;
  };

  const handleWeightChange = (e: any) => {
    setWeight(e.target.value);
    let weight_ = e.target.value;
    if (unit === "LBS") {
      weight_ = convertToKg(weight_);
    }
    let answers_ = structuredClone(answers);
    if (currentQuestion.id === "Q6") {
      answers_.targetWeight = parseInt(weight_);
      answers_.targetDate = targetDate;
    } else {
      answers_.weight = parseInt(weight_);
    }
    setAnswers(answers_);
  };
  const updateDateToAnswer = (value: string) => {
    setTargetDate(value);
    let answers_ = structuredClone(answers);
    answers_.targetDate = value;

    setAnswers(answers_);
  };
  console.log(targetDate);
  return (
    <div className="weight-selector">
      <div className="input-group">
        <input
          type="number"
          value={weight || 0}
          onChange={handleWeightChange}
        />
        <div className="unit-toggle">
          <button
            className={unit === "LBS" ? "active" : ""}
            onClick={() => handleUnitChange("LBS")}
          >
            LBS
          </button>
          <button
            className={`kg ${unit === "KG" ? "active" : ""}`}
            onClick={() => handleUnitChange("KG")}
          >
            KG
          </button>
        </div>
      </div>
      <p className="valid-range">
        Valid weight is {unit === "LBS" ? "50-500 lbs" : "23-227 kg"}
      </p>

      {currentQuestion.id === "Q6" && (
        <input
          type="date"
          value={targetDate}
          onChange={(e) => updateDateToAnswer(e.target.value)}
        />
      )}
    </div>
  );
};

export default Weight;

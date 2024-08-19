import React, { useEffect, useState } from "react";
import "./height.component.scss";
import { QuestionStates } from "../../context/questionsProvider";

const Height = () => {
  const [unit, setUnit] = useState("FT");
  const [feet, setFeet] = useState<number>();
  const [inches, setInches] = useState<number>();
  const [cm, setCm] = useState<number>();
  let { answers, setAnswers } = QuestionStates();

  const handleUnitChange = (unit: any) => {
    setUnit(unit);
  };
  const convertToCm = (feet: number, inches: number) => {
    const cmPerInch = 2.54;
    const inchesPerFoot = 12;
    const totalInches = feet * inchesPerFoot + inches;
    // Convert total inches to centimeters
    const centimeters = totalInches * cmPerInch;
    return centimeters;
  };

  useEffect(() => {
    const handleHeightChange = () => {
      let centimeter = 0;
      if (unit === "FT" && feet && inches) {
        centimeter = convertToCm(feet, inches);
      } else if (unit === "CM" && cm) {
        centimeter = cm;
      }
      let answers_ = structuredClone(answers);
      answers_.height = centimeter;
      console.log(answers_);
      setAnswers(answers_);
    };
    handleHeightChange();
  }, [feet, cm, inches]);

  return (
    <div className="height-selector">
      <div className="unit-toggle">
        <button
          className={`ft ${unit === "FT" ? "active" : ""}`}
          onClick={() => handleUnitChange("FT")}
        >
          FT
        </button>
        <button
          className={`cm ${unit === "CM" ? "active" : ""}`}
          onClick={() => handleUnitChange("CM")}
        >
          CM
        </button>
      </div>
      {unit === "FT" ? (
        <div className="input-group-parent">
          <div className="input-group">
            <input
              type="number"
              value={feet}
              onChange={(e) => setFeet(parseInt(e.target.value))}
              min={2}
              max={9}
            />
            <span>ft</span>
          </div>
          <div className="input-group">
            <input
              type="number"
              value={inches}
              onChange={(e) => setInches(parseInt(e.target.value))}
              min={0}
              max={12}
            />
            <span>in</span>
          </div>
        </div>
      ) : (
        <>
          <div className="input-group">
            <input
              type="number"
              value={cm}
              onChange={(e) => setCm(parseInt(e.target.value))}
              min={60}
              max={300}
            />
            <span>cm</span>
          </div>
        </>
      )}

      <p className="valid-range">
        Valid height is {unit === "FT" ? "2'-9'11\"" : "60-300cm"}
      </p>
    </div>
  );
};

export default Height;

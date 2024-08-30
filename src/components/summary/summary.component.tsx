import React, { useEffect, useRef, useState } from "react";
import { QuestionStates } from "../../context/questionsProvider";
import { calculateCalories, daysUntilDeadline } from "../../utils/helper";
// @ts-ignore
import "./summary.scss";
import Protien from "../../assets/images/palm.svg";
import Fats from "../../assets/images/thumb.svg";
import Veggies from "../../assets/images/fist.svg";
import Carbs from "../../assets/images/cupped.svg";
import Brand from "../../assets/images/brand.png";
import html2canvas from "html2canvas";
import { generatePdf } from "./help";
const nutritionData = [
  {
    id: 1,
    portions: "6 palm-sized portions",
    weight: "185 g",
    type: "protein",
    total: "2 total palms or 62 g per meal",
    examples: ["Chicken", "Tofu", "Fish", "Greek yogurt"],
    image: "path/to/palm.png", // Replace with actual image path
    colorClass: "protein-color",
  },
  {
    id: 2,
    portions: "6 - 8 fist-sized portions",
    weight: "veggies",
    type: "veggies",
    total: "2 or 3 total fists per meal",
    examples: ["Spinach", "Carrots", "Cauliflower", "Tomatoes"],
    image: "path/to/fist.png", // Replace with actual image path
    colorClass: "veggies-color",
  },
  {
    id: 3,
    portions: "5 cupped handfuls",
    weight: "170 g",
    type: "carbs",
    total: "1 or 2 total handfuls or 57 g per meal",
    examples: ["Beans", "Blueberries", "Sweet potatoes", "Oats"],
    image: "path/to/handful.png", // Replace with actual image path
    colorClass: "carbs-color",
  },
];
const Summary = () => {
  const [caloriesData, setCaloriesData] = useState<any>(null);
  const [macros, setMacros] = useState<any>({
    protien: 0,
    veggies: 0,
    carbs: 0,
    fats: 0,
  });
  console.log(macros);
  const [handRules, setHandRules] = useState<any>({
    palm: 0,
    handful: 0,
    thumb: 0,
    fist: 0,
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
    macros_.veggies = 2 * answers.meals;
    macros_.protien = Math.floor(
      (calorieData_?.requiredCalories * ratio.protien) / 100 / 4
    );
    macros_.carbs = Math.floor(
      (calorieData_?.requiredCalories * ratio.carbs) / 100 / 4
    );
    macros_.fats = Math.floor(
      (calorieData_?.requiredCalories * ratio.fats) / 100 / 9
    );
    let handRules_ = handRules;
    handRules_.palm = Math.floor(macros_.protien / 30);
    handRules_.handful = Math.floor(macros_.carbs / 30);
    handRules_.thumb = Math.floor(macros_.fats / 12);
    setHandRules(handRules_);
    setMacros(macros_);
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

  const componentRef = useRef<any>();

  const handleCapture = async () => {
    let container = document.getElementById("firstPageDiv");
    if (!container) {
      return "";
    }
    let canvas: any = await html2canvas(container);
    let url = canvas.toDataURL("image/png", 1.0);
    console.log(canvas, url);
    return url;
  };

  let firstPagePdf = () => {
    return (
      <div className="firstPageParent" ref={componentRef} id="firstPageDiv">
        <img src={Brand} />
        <div className="">{answers?.name}</div>
        <hr />
        <div className="firstPageParentTitle">CALORIE, MACRO,</div>
        <div className="firstPageParentTitle">AND PORTION GUIDE</div>
        <hr />
        <div className="firstPageParentBottom">
          <div className="firstPageParentBottomCreated">Created By</div>
          <br />
          <div className="firstPageParentBottomTitle">Zach Lloyd Coaching</div>
        </div>
      </div>
    );
  };

  return (
    <div className="questionWrapper">
      <button
        className={"export-button"}
        onClick={async () => {
          generatePdf(
            answers,
            caloriesData,
            macros,
            handRules,
            firstPagePdf,
            await handleCapture()
          );
        }}
      >
        Access your Complete Guide
      </button>
      <hr></hr>
      <h2>Brief Summary</h2>
      <div className="summaryRow">
        <div>Age</div>
        <div>{answers.age}</div>
      </div>
      <div className="summaryRow">
        <div>Current Weight</div>
        <div>
          {answers.weight} {answers.isKg ? "kg" : "lbs"}
        </div>
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
          To maintain your current weight requires about{" "}
          <strong> {caloriesData?.TDEE} </strong>
          Calories per day.
        </p>
        <p>
          To reach your goal of{" "}
          <strong>
            {answers.targetWeight} {answers.isKg ? "kg" : "lbs"}{" "}
          </strong>{" "}
          in <strong>{daysUntilDeadline(answers.targetDate)} days </strong> at
          your current body weight and activity level, requires about:
        </p>
        <h1>
          <strong>{caloriesData?.requiredCalories}</strong> Calories per day.
        </h1>
      </div>
      <br />

      <h2>HERE'S HOW THAT BREAKS DOWN:</h2>
      <br />
      <div className="summary-macros">
        <div className="summary-macros-item">
          Protien: {Math.floor(macros.protien)} g
        </div>
        <div className="summary-macros-item">
          Carbs: {Math.floor(macros.carbs)} g
        </div>
        <div className="summary-macros-item">
          Fat: {Math.floor(macros.fats)} g
        </div>
      </div>
      <div className="nutrition-info">
        {Object.keys(macros).map((item) => (
          <div className="nutrition-item">
            <div className="nutrition-image">
              {item === "protien" && <img src={Protien} alt={"Palm"} />}
              {item === "veggies" && <img src={Veggies} alt={"Fist"} />}
              {item === "carbs" && <img src={Carbs} alt={"Carbo"} />}
              {item === "fats" && <img src={Fats} alt={"Fats"} />}
            </div>
            <div className="nutrition-details">
              <h3>
                {item === "protien" &&
                  `${handRules.palm} palm sized portions ( or ${macros[item]} g ) \n of Protien per day`}
                {item === "veggies" &&
                  `${macros.veggies} - ${
                    macros.veggies + 2
                  } fist-sized portions \n of Veggies per day`}
                {item === "carbs" &&
                  `${handRules.handful} cupped handfuls ( or ${macros[item]} g ) \n of Carbohydrates per day`}
                {item === "fats" &&
                  `${handRules.thumb} thumb sized portions ( or ${macros[item]} g ) \n of Healthy Fats per day`}
              </h3>
              <p>
                {item === "protien" &&
                  `That's ${Math.round(
                    handRules.palm / answers?.meals
                  )} palm or ${Math.round(
                    macros.protien / answers?.meals
                  )} g of protien per meal`}
                {item === "veggies" && `That's 2-3 fist per meal`}
                {item === "carbs" &&
                  `That's ${Math.round(
                    handRules.handful / answers?.meals
                  )} handful or ${Math.round(
                    macros.carbs / answers?.meals
                  )} g of protien per meal`}
                {item === "fats" &&
                  `That's ${Math.round(
                    handRules.thumb / answers?.meals
                  )} thumb or ${Math.round(
                    macros.fats / answers?.meals
                  )} g of protien per meal`}
              </p>
              <p>{/* That's <strong>{item.total}</strong>. */}</p>
              {/* <div className="nutrition-examples">
                <strong>FOR EXAMPLE</strong>
                <ul>
                  {item.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="plan-desc">
        <h2>
          Get your FREE personalized report and eating guide. It includes:
        </h2>
        <li>How to get started on your goals TODAY (and what to expect)</li>
        <li>How to eat the right calories and macros at each meal</li>
        <li>What foods to eat based on your preferences</li>
        <li>How to make adjustments and maximize your results</li>
        <li>Personalized portion tracker (this really works!)</li>
      </div>
      <div style={{ opacity: 0 }}>{firstPagePdf()}</div>
    </div>
  );
};

export default Summary;

import React, { useEffect, useState } from "react";
import { QuestionStates } from "../../context/questionsProvider";
import { calculateCalories, daysUntilDeadline } from "../../utils/helper";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
// @ts-ignore
import PdfFile from "../../assets/files/template.pdf"
import "./summary.scss";
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
  const generatePdf = async () => {
    const existingPdfBytes = await fetch(PdfFile).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    firstPage.drawText("This text sadfsafdswas added with JavaScript!", {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    });
    console.log(width, firstPage)

    const pdfBytes = await pdfDoc.save();
    const url_ = window.URL.createObjectURL(new Blob([pdfBytes]));
    const link = document.createElement('a');
    link.href = url_;
    link.setAttribute('download', 'file.pdf'); //or any other extension
    document.body.appendChild(link);
    link.click();
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
      <div className="summary-macros">
        <h2>HERE'S HOW THAT BREAKS DOWN:</h2>
        <div className="summary-macros-item">
          Protien: {Math.floor(macros.protien / 4)} g
        </div>
        <div className="summary-macros-item">
          Carbs: {Math.floor(macros.carbs / 4)} g
        </div>
        <div className="summary-macros-item">
          Fat: {Math.floor(macros.fats / 9)} g
        </div>
      </div>
      <div className="nutrition-info">
        {nutritionData.map((item) => (
          <div key={item.id} className="nutrition-item">
            <div className="nutrition-image">
              <img src={item.image} alt={item.type} />
            </div>
            <div className="nutrition-details">
              <h3>
                {item.portions} (or {item.weight}) of{" "}
                <span className={item.colorClass}>{item.type}</span> per day
              </h3>
              <p>
                That's <strong>{item.total}</strong>.
              </p>
              <div className="nutrition-examples">
                <strong>FOR EXAMPLE</strong>
                <ul>
                  {item.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={generatePdf}>Generate</button>
    </div>
  );
};

export default Summary;

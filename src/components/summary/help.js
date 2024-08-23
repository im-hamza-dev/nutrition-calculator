import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import PdfFile from "../../assets/files/template.pdf";

export const generatePdf = async (
  answers,
  calculateCalories,
  macros,
  handRules
) => {
  const {
    weight,
    height: personHeight,
    age,
    targetWeight,
    targetDate,
    gender,
    exerciseLevel,
    eatingStyle,
    meals,
    goals,
  } = answers;

  const existingPdfBytes = await fetch(PdfFile).then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const thirdPage = pages[2];
  const fourthPage = pages[3];
  const fifthPage = pages[4];
  const { width, height } = thirdPage.getSize();
  const backgroundColor = rgb(239 / 255, 242 / 255, 244 / 255); // Light grey background color
  const backgroundColorWhite = rgb(1, 1, 1); // Light grey background color
  const blue = rgb(0.1, 0.7, 0.8); // Light grey background color
  //age
  thirdPage.drawRectangle({
    x: 65,
    y: 460,
    width: 105,
    height: 30,
    color: backgroundColor,
  });
  thirdPage.drawText(JSON.stringify(age), {
    x: 100,
    y: 470,
    size: 25,
    font: helveticaFont,
    opacity: 0.6,

    color: rgb(0, 0, 0),
  });

  //sex
  thirdPage.drawRectangle({
    x: 190,
    y: 460,
    width: 105,
    height: 30,
    color: backgroundColor,
  });
  thirdPage.drawText(gender, {
    x: 210,
    y: 470,
    size: 25,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });
  //weight
  thirdPage.drawRectangle({
    x: 315,
    y: 460,
    width: 105,
    height: 30,
    color: backgroundColor,
  });
  thirdPage.drawText(JSON.stringify(weight) + " kg", {
    x: 350,
    y: 470,
    size: 25,
    font: helveticaFont,
    opacity: 0.6,

    color: rgb(0, 0, 0),
  });

  //height
  thirdPage.drawRectangle({
    x: 440,
    y: 460,
    width: 105,
    height: 30,
    color: backgroundColor,
  });
  let hgt = `${personHeight.toFixed()} cm`;
  thirdPage.drawText(hgt, {
    x: 465,
    y: 470,
    size: 25,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //exercise level
  let exerciseBarWidth = 120;
  if (exerciseLevel === "Light") {
    exerciseBarWidth = 170;
  } else if (exerciseLevel === "Moderate") {
    exerciseBarWidth = 220;
  } else if (exerciseLevel === "Instense") {
    exerciseBarWidth = 250;
  } else if (exerciseLevel === "Very Instense") {
    exerciseBarWidth = 290;
  }
  thirdPage.drawRectangle({
    x: 185,
    y: 415,
    width: exerciseBarWidth,
    height: 21,
    color: blue,
  });
  thirdPage.drawText(exerciseLevel, {
    x: 200,
    y: 422,
    size: 13,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //eating style
  thirdPage.drawRectangle({
    x: 185,
    y: 300,
    width: 160,
    height: 25,
    color: backgroundColor,
  });
  thirdPage.drawText(eatingStyle, {
    x: 200,
    y: 310,
    size: 13,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //meals
  thirdPage.drawRectangle({
    x: 460,
    y: 300,
    width: 80,
    height: 25,
    color: backgroundColor,
  });
  thirdPage.drawText(JSON.stringify(meals), {
    x: 490,
    y: 310,
    size: 18,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //goal
  thirdPage.drawRectangle({
    x: 110,
    y: 130,
    width: 155,
    height: 30,
    color: backgroundColor,
  });
  thirdPage.drawText(goals, {
    x: 120,
    y: 143,
    size: 17,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });
  //target-weight
  thirdPage.drawRectangle({
    x: 315,
    y: 130,
    width: 105,
    height: 30,
    color: backgroundColor,
  });
  thirdPage.drawText(JSON.stringify(targetWeight), {
    x: 350,
    y: 143,
    size: 17,
    font: helveticaFont,
    opacity: 0.6,

    color: rgb(0, 0, 0),
  });

  //target-date
  thirdPage.drawRectangle({
    x: 440,
    y: 130,
    width: 105,
    height: 30,
    color: backgroundColor,
  });
  thirdPage.drawText(targetDate, {
    x: 445,
    y: 143,
    size: 17,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //fourth page:
  let protienLineA = `${handRules.palm} palm-sized portions (or ${macros.protien} g)`;
  //protien
  fourthPage.drawRectangle({
    x: 140,
    y: 635,
    width: 300,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(protienLineA, {
    x: 150,
    y: 638,
    size: 15,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  let protienLineB = `That's ${Math.round(handRules.palm / meals)} palm or ${(
    macros.protien / meals
  ).toFixed()} g of protien per meal`;
  fourthPage.drawRectangle({
    x: 140,
    y: 570,
    width: 300,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(protienLineB, {
    x: 150,
    y: 580,
    size: 12,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //carbs
  let carbsLineA = `${handRules.handful} cupped handfuls (or ${macros.carbs} g)`;
  fourthPage.drawRectangle({
    x: 140,
    y: 407,
    width: 300,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(carbsLineA, {
    x: 150,
    y: 413,
    size: 15,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  let carbsLineB = `That's ${Math.round(handRules.handful / meals)} palm or ${(
    macros.carbs / meals
  ).toFixed()} g of protien per meal`;
  fourthPage.drawRectangle({
    x: 140,
    y: 350,
    width: 300,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(carbsLineB, {
    x: 150,
    y: 360,
    size: 12,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //fats
  let fatsLineA = `${handRules.thumb} thumb-sized portions (or ${macros.fats} g)`;
  fourthPage.drawRectangle({
    x: 140,
    y: 290,
    width: 300,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(fatsLineA, {
    x: 150,
    y: 293,
    size: 15,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  let fatsLineB = `That's ${Math.round(handRules.thumb / meals)} palm or ${(
    macros.fats / meals
  ).toFixed()} g of protien per meal`;
  fourthPage.drawRectangle({
    x: 140,
    y: 230,
    width: 300,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(fatsLineB, {
    x: 150,
    y: 240,
    size: 12,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //calories
  let caloriesLine = `Eating like this will provide the ${calculateCalories?.requiredCalories} calories you are estimated to need to reach your goals`;
  fourthPage.drawRectangle({
    x: 60,
    y: 170,
    width: 500,
    height: 30,
    color: backgroundColorWhite,
  });
  fourthPage.drawText(caloriesLine, {
    x: 60,
    y: 180,
    size: 11,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });

  //meals
  fifthPage.drawRectangle({
    x: 470,
    y: 655,
    width: 60,
    height: 30,
    color: backgroundColor,
  });
  fifthPage.drawText(JSON.stringify(meals), {
    x: 480,
    y: 665,
    size: 14,
    font: helveticaFont,
    opacity: 0.6,
    color: rgb(0, 0, 0),
  });
  console.log(width, height);

  const pdfBytes = await pdfDoc.save();
  const url_ = window.URL.createObjectURL(new Blob([pdfBytes]));
  const link = document.createElement("a");
  link.href = url_;
  link.setAttribute("download", "CALORIE, MACRO, AND PORTION GUIDE.pdf"); //or any other extension
  document.body.appendChild(link);
  link.click();
  // Send PDF to the backend
  const formData = new FormData();
  formData.append(
    "file",
    new Blob([pdfBytes], { type: "application/pdf" }),
    "report.pdf"
  );
  formData.append("email", answers.email);

  const response = await fetch(
    "http://23.21.71.157:5000/send-pdf",
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    alert("PDF sent successfully!");
  } else {
    alert("Failed to send PDF.");
  }
};

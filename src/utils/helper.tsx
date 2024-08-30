// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// const userData = {
//   weight: 75, // in kg
//   height: 167, // in cm
//   age: 25, // in years
//   activityLevel: 1.55, // Moderately Active
//   targetWeight: 67, // in kg
//   timeFrame: 3, // in months
// };

const generateActivityLevelValue = (activityLevel: any) => {
  let value = 1.2;
  if (activityLevel === "Very Light") {
    value = 1.2;
  } else if (activityLevel === "Light") {
    value = 1.375;
  } else if (activityLevel === "Moderate") {
    value = 1.55;
  } else if (activityLevel === "Intense") {
    value = 1.725;
  } else if (activityLevel === "Very Intense") {
    value = 1.9;
  }
  return value;
};
export const daysUntilDeadline = (deadlineDate: string) => {
  const currentDate: any = new Date(); // Get the current date
  const deadline: any = new Date(deadlineDate); // Convert the deadline date string to a Date object

  // Calculate the difference in time (in milliseconds)
  const timeDifference: number = deadline - currentDate;

  // Convert time difference from milliseconds to days
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysRemaining;
};

const calculateCalories = (data: any) => {
  let {
    weight,
    height,
    age,
    targetWeight,
    targetDate,
    gender,
    exerciseLevel,
    isKg,
  } = data;
  if (!isKg) {
    weight = convertToKg(weight);
    targetWeight = convertToKg(targetWeight);
  }
  // Calculate BMR using Mifflin-St Jeor Equation for Men
  const BMR =
    gender === "Male"
      ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
      : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

  let activityLevelValue = generateActivityLevelValue(exerciseLevel);
  // Calculate TDEE
  const TDEE = BMR * activityLevelValue;

  // Weight loss goal calculations
  const weightLossKg = weight - targetWeight; // Amount of weight to lose
  const caloriesPerKg = 7700; // Approx. calories per kg of weight loss
  const totalCaloricDeficit = weightLossKg * caloriesPerKg;

  // Convert time frame from months to days
  const days = daysUntilDeadline(targetDate);

  // Daily caloric deficit required
  const dailyCaloricDeficit = totalCaloricDeficit / days;

  // Required daily intake to meet goal
  const requiredCalories = TDEE - dailyCaloricDeficit;

  return {
    BMR: BMR.toFixed(2),
    TDEE: TDEE.toFixed(2),
    dailyCaloricDeficit: dailyCaloricDeficit.toFixed(2),
    requiredCalories: requiredCalories.toFixed(2),
  };
};

const convertToKg = (pounds: number) => {
  const kgPerPound = 0.45359237; // 1 pound is approximately 0.45359237 kilograms
  const kilograms = pounds * kgPerPound;
  return kilograms;
};
const convertToLbs = (kg: number) => {
  if (typeof kg !== "number" || isNaN(kg)) {
    return "Please provide a valid number for kg";
  }
  const conversionFactor = 2.20462;
  const lbs = kg * conversionFactor;
  return Number(lbs.toFixed(2));
};

export { calculateCalories };

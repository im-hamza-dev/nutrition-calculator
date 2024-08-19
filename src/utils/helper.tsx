// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// const userData = {
//     weight: 75, // in kg
//     height: 167, // in cm
//     age: 25, // in years
//     activityLevel: 1.55, // Moderately Active
//     targetWeight: 67, // in kg
//     timeFrame: 3, // in months
//   };

//   const calculateCalories = (data) => {
//     const { weight, height, age, activityLevel, targetWeight, timeFrame } = data;

//     // Calculate BMR using Mifflin-St Jeor Equation for Men
//     const BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);

//     // Calculate TDEE
//     const TDEE = BMR * activityLevel;

//     // Weight loss goal calculations
//     const weightLossKg = weight - targetWeight; // Amount of weight to lose
//     const caloriesPerKg = 7700; // Approx. calories per kg of weight loss
//     const totalCaloricDeficit = weightLossKg * caloriesPerKg;

//     // Convert time frame from months to days
//     const days = timeFrame * 30;

//     // Daily caloric deficit required
//     const dailyCaloricDeficit = totalCaloricDeficit / days;

//     // Required daily intake to meet goal
//     const requiredCalories = TDEE - dailyCaloricDeficit;

//     return {
//       BMR: BMR.toFixed(2),
//       TDEE: TDEE.toFixed(2),
//       dailyCaloricDeficit: dailyCaloricDeficit.toFixed(2),
//       requiredCalories: requiredCalories.toFixed(2),
//     };
//   };

//   const results = calculateCalories(userData);

// console.log("Try programiz.pro", results);

export {}
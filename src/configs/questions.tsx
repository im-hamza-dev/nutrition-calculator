import { QuestionDetails } from "../utils/interfaces";
import LoseWeight from "../assets/images/goal-loseweight.svg";
import BuildMuscle from "../assets/images/goal-buildmuscle.svg";
import Athletic from "../assets/images/goal-athleticperformance.svg";
import Body from "../assets/images/goal-bodyrecomposition.svg";
import Health from "../assets/images/goal-improvehealth.svg";
import Anything from "../assets/images/meal-anything.svg";
import Keto from "../assets/images/meal-keto.svg";
import Medit from "../assets/images/meal-mediterranean.svg";
import Paleo from "../assets/images/meal-paleo.svg";
import Plant from "../assets/images/meal-plantbased.svg";
import Veg from "../assets/images/meal-vegetarian.svg";
import Speed1 from "../assets/images/speedo1.svg";
import Speed2 from "../assets/images/speedo2.svg";
import Speed3 from "../assets/images/speedo3.svg";
import Speed4 from "../assets/images/speedo4.svg";
export const questionsData: any = [
  {
    id: "Q1",
    category: "Details",
    question: "What's your age?",
    preQuestion: 'Okay, first "personal" question.',
    description: "We won't tell",
    type: "number",
    validation: {
      min: 18,
      max: 120,
    },
  },
  {
    id: "Q2",

    category: "Details",
    question: "What's your biological sex?",
    preQuestion: "Very good. Let's keep moving.",
    description: "",
    type: "multipleChoice",

    validation: {
      min: 60,
      max: 300,
    },
    options: [
      {
        id: 1,
        label: "Male",
        description: "",
        visible: true,
      },
      {
        id: 1,
        label: "Female",
        description: "",
        visible: true,
      },
    ],
  },
  {
    id: "Q3",

    category: "Details",
    question: "How tall are you?",
    preQuestion: "Got it. Next question.",
    description: "",
    type: "height",
    validation: {
      min: 60, //cm
      max: 300,
    },
  },
  {
    id: "Q4",

    category: "Details",
    question: "How much do you weigh right now?",
    preQuestion: "Great. Last question in the section.",
    description: "",
    type: "weight",
    validation: {
      min: 23, //kgs
      max: 227,
    },
  },
  {
    id: "Q5",

    category: "Goals",
    question: "What's your goal?",
    preQuestion: "Now tell us what you want to achieve.",
    description: "",
    type: "multipleChoice",
    validation: {},
    options: [
      {
        id: 1,
        label: "Lose Weight",
        description: "You'd like to lose at least 10 to 15 pounds (or more).",
        image: LoseWeight, //// Replace with actual image path
        visible: true,
      },
      {
        id: 2,
        label: "Build Muscle",
        description:
          "You'd like to build muscle and increase your overall body weight.",
        image: BuildMuscle, //Replace with actual image path
        visible: true,
      },
      {
        id: 3,
        label: "Athletic Performance",
        description:
          "You want optimal nutrition to support long and intense athletic training. (Minimal to no weight change desired.)",
        image: Athletic, //Replace with actual image path
        visible: true,
      },
      {
        id: 4,
        label: "Body Recomposition",
        description:
          "You want to lose less than 10 to 15 pounds of body fat, while simultaneously building muscle.",
        image: Body, //Replace with actual image path
        visible: true,
      },
      {
        id: 5,
        label: "Improve Health",
        description:
          "You want to improve your nutrition and overall health, while maintaining your current weight.",
        image: Health, //// Replace with actual image path
        visible: true,
      },
    ],
  },
  {
    id: "Q6",

    category: "Goals",
    question: "How much do you want to weigh?",
    preQuestion: "Let's get really specific on this.",
    description: "",
    type: "weight",
    validation: {
      min: 23, //kgs
      max: 227,
    },
  },
  {
    id: "Q7",

    category: "Diet",
    question: "What's your preferred eating style?",
    preQuestion: "Almost there. Time to talk food.",
    description: "",
    type: "multipleChoice",
    validation: {},
    options: [
      {
        id: 1,
        label: "Anything  ",
        description:
          "No major preferences or restrictions. Will eat practically anything.",
        image: Anything, // // Replace with actual image path
        visible: true,
      },
      {
        id: 2,
        label: "Mediterranean",
        description:
          "Features plant foods, healthy fats, and moderate amounts of lean protein.",
        image: Medit, // Replace with actual image path
        visible: true,
      },
      {
        id: 3,
        label: "Paleo",
        description: "Emphasizes meats, vegetables, and healthy fats.",
        image: Paleo, // Replace with actual image path
        visible: true,
      },
      {
        id: 4,
        label: "Vegetarian",
        description:
          "A plant-based diet, plus small amounts of eggs and dairy.",
        image: Veg, // Replace with actual image path
        visible: true,
      },
      {
        id: 5,
        label: "Ketogenic",
        description: "A high-fat, very-low carbohydrate diet.",
        image: Keto, // // Replace with actual image path
        visible: true,
      },
      {
        id: 6,
        label: "Fully Plant-Based",
        description: "All plant-based foods. No animal products of any kind.",
        image: Plant, // // Replace with actual image path
        visible: true,
      },
    ],
  },
  {
    id: "Q8",

    category: "Diet",
    question:
      "Do you want to use Fully Plant-Based's standard macronutrient ratios, or customize?",
    preQuestion: "Tell us how to run the numbers.",
    description: "",
    type: "multipleChoice",
    validation: {},
    options: [
      // {
      //   id: 1,
      //   label: [30, 35, 35],
      //   description: "Standard",
      //   image: "path/to/very-light.png", // Replace with actual image path
      //   visible: true,
      // },
      {
        id: 1,
        label: "Balanced",
        description: "30% Protien, 35% Carb, 35% Fat",
        visible: true,
      },
      {
        id: 2,
        label: "Low-Fat",
        description: "30% Protien, 50% Carb, 20% Fat",
        visible: true,
      },
      {
        id: 3,
        label: "Low-Carb",
        description: "30% Protien, 20% Carb, 50% Fat",
        visible: true,
      },
    ],
  },
  {
    id: "Q9",

    category: "Diet",
    question: "How many meals do you like to eat each day?",
    preQuestion: "Just a couple of more questions.",
    description: "",
    type: "number",
    validation: {
      note: "Valid selection is 1 to 8 meals.",
      min: 1,
      max: 8,
    },
  },
  {
    id: "Q10",

    category: "Activity",
    question: "Describe how active you are each day.",
    preQuestion: "Now tell us about your activity levels.",
    description: "(not including purposeful exercise)",
    type: "multipleChoice",
    validation: {},
    options: [
      {
        id: 1,
        label: "Very Light",
        description: "Sitting most of the day (example: desk job).",
      },
      {
        id: 2,
        label: "Light",
        description:
          "A mix of sitting, standing, and light activity (example: teacher).",
      },
      {
        id: 3,
        label: "Moderate",
        description:
          "Continuous gentle to moderate activity (example: restaurant server). ",
      },
      {
        id: 4,
        label: "Heavy",
        description:
          "Strenuous activity throughout the day (example: construction work).",
      },
    ],
  },
  {
    id: "Q11",

    category: "Activity",
    question: "What best describes your weekly workouts?",
    preQuestion: "Cool. Let's go a little deeper on exercise.",
    description: "",
    type: "multipleChoice",
    validation: {},
    options: [
      {
        id: 1,
        label: "Very Light",
        description: "Almost no purposeful exercise.",
        image: Speed1, // Replace with actual image path
      },
      {
        id: 2,
        label: "Light",
        description: "1-3 hours of gentle to moderate exercise.",
        image: Speed2, // Replace with actual image path
      },
      {
        id: 3,
        label: "Moderate",
        description: "3-4 hours of moderate exercise.",
        image: Speed3, // Replace with actual image path
      },
      {
        id: 4,
        label: "Intense",
        description: "4-6 hours of moderate to strenuous exercise.",
        image: Speed4, // Replace with actual image path
      },
      {
        id: 5,
        label: "Very Intense",
        description: "7+ hours of strenuous exercise.",
        image: Speed4, // Replace with actual image path
      },
    ],
  },
  {
    id: "Q12",

    category: "Results",
    question: "Give Contact Details!",
    preQuestion: "",
    description: "",
    type: "name",
    validation: {},
  },
  {
    id: "Q13",

    category: "Results",
    question: "Your Results!",
    preQuestion: "",
    description:
      "We’ve created a personalized eating guide for your body, activity levels, eating preferences, and goals.",
    type: "summary",
    validation: {},
  },
];

export const answersInitial = {
  name: "",
  email: "",
  gender: null,
  weight: null, // in kg
  height: null, // in cm
  age: null, // in years
  activityLevel: null, // Moderately Active
  exerciseLevel: null,
  targetWeight: null, // in kg
  targetDate: null, // in months

  //use below to generate macro's %
  meals: 0,
  goals: "",
  eatingStyle: "",
  macroRatio: null,
};

export const categories = ["Details", "Goals", "Diet", "Activity", "Results"];

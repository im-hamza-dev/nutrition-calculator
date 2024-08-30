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
import VLight from "../assets/images/vlight.png";
import Light from "../assets/images/light.png";
import Moderate from "../assets/images/moderate.png";
import Intense from "../assets/images/intense.png";
import VIntense from "../assets/images/vintense.png";
import Men from "../assets/images/man.png";
import Women from "../assets/images/women.png";
export const questionsData: any = [
  {
    id: "Q1",
    category: "Details",
    question: "What's your age?",
    preQuestion: "",
    description: "",
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
    preQuestion: "",
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
        image: Men,
      },
      {
        id: 1,
        label: "Female",
        description: "",
        visible: true,
        image: Women,
      },
    ],
  },
  {
    id: "Q3",

    category: "Details",
    question: "How tall are you?",
    preQuestion: "Got it. Next.",
    description: "",
    type: "height",
    validation: {
      min: 122, //cm
      max: 213,
    },
  },
  {
    id: "Q4",

    category: "Details",
    question: "How much do you weight today?",
    preQuestion: "Last question in this section, you're cruising.",
    description: "",
    type: "weight",
    validation: {
      min: 45, //kgs
      max: 225,
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
        id: 2,
        label: "Build Muscle",
        description:
          "You'd like to build muscle and increase your overall body weight.",
        image: BuildMuscle, //Replace with actual image path
        visible: true,
      },
      {
        id: 1,
        label: "Lose Weight",
        description: "You'd like to lose at least 10 to 15 pounds (or more).",
        image: LoseWeight, //// Replace with actual image path
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
    ],
  },
  {
    id: "Q6",

    category: "Goals",
    question: "How much do you want to weigh by when?",
    preQuestion: "Let's get specific.",
    description: "",
    type: "weight",
    validation: {
      min: 45, //kgs
      max: 225,
    },
  },
  {
    id: "Q7",

    category: "Diet",
    question: "What's your preferred eating style?",
    preQuestion: "Lets talk grub!",
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
      "Do you want to use our standard macronutrient ratios, or try customization?",
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
        id: 2,
        label: "Low-Fat",
        description: "30% Protien, 50% Carb, 20% Fat",
        visible: true,
      },
      {
        id: 1,
        label: "Balanced",
        description: "30% Protien, 35% Carb, 35% Fat",
        visible: true,
        recommended: true,
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
    description: "Choose between 1-6 meals",
    type: "number",
    validation: {
      note: "Valid selection is 1 to 8 meals.",
      min: 1,
      max: 6,
    },
  },
  {
    id: "Q10",

    category: "Activity",
    question: "Describe how active you are each day.",
    preQuestion: "",
    description: "(not including purposeful exercise)",
    type: "multipleChoice",
    validation: {},
    options: [
      {
        id: 1,
        label: "Very Light",
        description: "Sitting most of the day\n (example: desk job).",
        image: Speed1, // Replace with actual image path
      },
      {
        id: 2,
        label: "Light",
        description:
          "A mix of sitting, standing, and light activity\n (example: teacher).",
        image: Speed2, // Replace with actual image path
      },
      {
        id: 3,
        label: "Moderate",
        description:
          "Continuous gentle to moderate activity\n (example: restaurant server). ",
        image: Speed3, // Replace with actual image path
      },
      {
        id: 4,
        label: "Heavy",
        description:
          "Strenuous activity throughout the day\n (example: construction work).",
        image: Speed4, // Replace with actual image path
      },
    ],
  },
  {
    id: "Q11",

    category: "Activity",
    question: "What best describes your weekly workouts?",
    preQuestion: "",
    description: "",
    type: "multipleChoice",
    validation: {},
    options: [
      {
        id: 1,
        label: "Very Light",
        description: "Almost no purposeful exercise.",
        image: VLight,
      },
      {
        id: 2,
        label: "Light",
        description: "1-3 hours of gentle to moderate exercise.",
        image: Light, // Replace with actual image path
      },
      {
        id: 3,
        label: "Moderate",
        description: "3-4 hours of moderate exercise.",
        image: Moderate, // Replace with actual image path
      },
      {
        id: 4,
        label: "Intense",
        description: "4-6 hours of moderate to strenuous exercise.",
        image: Intense, // Replace with actual image path
      },
      {
        id: 5,
        label: "Very Intense",
        description: "7+ hours of strenuous exercise.",
        image: VIntense, // Replace with actual image path
      },
    ],
  },
  {
    id: "Q12",

    category: "Results",
    question: "Where should we send your personalized Macro and Calorie Guide",
    preQuestion: "You Finished!",
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
  isKg: true,
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

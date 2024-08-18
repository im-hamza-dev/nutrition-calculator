export const questionsData = [
  {
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
    category: "Details",
    question: "What's your biological sex?",
    preQuestion: "Very good. Let's keep moving.",
    description: "",
    type: "gender",

    validation: null,
    options: ["Male", "Female"],
  },
  {
    category: "Details",
    question: "How tall are you?",
    preQuestion: "",
    description: "",
    validation: {
      min: 2, //ft
      max: 9.11,
    },
  },
];

export const categories = ["Details", "Goals", "Diet", "Activity", "Results"];

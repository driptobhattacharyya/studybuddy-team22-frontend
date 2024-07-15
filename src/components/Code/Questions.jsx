const questions = [
  {
    id: 1,
    question: "Write a function to add two numbers.",
    functionName: "add",
    explanation:
      "You need to write a function that takes two numbers and returns their sum. The function should be named 'add'.",
    examples: [
      { input: [1, 2], output: 3 },
      { input: [10, 5], output: 15 },
    ],
    testCases: [
      { input: [1, 2], expectedOutput: 3 },
      { input: [10, 5], expectedOutput: 15 },
    ],
    deadline: "2024-12-31 23:59",
  },
];

export default questions;

const seedQuestions = [
  {
    questionText: "JSON name/value pair is written as",
    answers: [
      "name’ : ‘value’",
      "name = ‘value’",
      "name = “value”",
      "“name” : “value”"
    ],
    correctAnswer: [3]
  },
  {
    questionText: "JSON strings have to be in",
    answers: ["single quote", "double quote", "single quote or double quote"],
    correctAnswer: [1]
  },
  {
    questionText:
      "In the below notation, Employee is of type { “Employee”: [ “Amy”, “Bob”, “John” ] }",
    answers: ["Not a valid JSON string", "Array", "Class", "Object"],
    correctAnswer: [1]
  },
  {
    questionText: "Which of the following is not a JSON type?",
    answers: ["Object", "date", "Array", "string"],
    correctAnswer: [1]
  },
  {
    questionText: "Which of these is correct about the JSON standard?",
    answers: [
      "It is an open standard",
      "It is privately developed",
      "It requires a license to use"
    ],
    correctAnswer: [0]
  },
  {
    questionText: "What is the file extension of JSON?",
    answers: [".jn", ".js", ".jsn", ".json"],
    correctAnswer: [3]
  }
];

export default seedQuestions;

// const initialQuizSession = {
//     playerName: null,
//     state: "NEW",
//     totalQuestions: 0,
//     questionsAnswered: 0,
//     questionsCorrect: 0
//   };

const quizSessionReducer = (quizSession, action) => {
  let updatedSession = {};
  console.log(action.playerName);
  switch (action.type) {
    case "AddPlayerName":
      updatedSession = { ...quizSession };
      updatedSession.playerName = action.playerName;
      return updatedSession;
    case "AnswerQuestion":
      updatedSession = { ...quizSession };
      updatedSession.questionsAnswered += 1;
      action.isCorrect
        ? (updatedSession.questionsCorrect += 1)
        : (updatedSession.questionsCorrect += 0);
      return updatedSession;
    // default:
    //   return quizSession;
  }
};

export default quizSessionReducer;

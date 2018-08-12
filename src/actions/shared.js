import { getInitalData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, userSaveQuestion, userAskQuestion } from './users'
import { receiveQuestions, saveQuestionVote, addQuestion } from './questions'

export function handleInitalData () {
  return (dispatch) => {
    return getInitalData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}


export function handleSaveQuestionAnswer (authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(saveQuestionVote(authedUser, qid, answer))
        dispatch(userSaveQuestion(authedUser, qid, answer))
      })
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(userAskQuestion(author, question.id))
      })
  }
}

import { getInitalData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, userSaveQuestion } from './users'
import { receiveQuestions, saveQuestionVote } from './questions'

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

import { saveQuestion } from '../utils/api'
import { userAskQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_VOTE = 'SAVE_QUESTION_VOTE'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function saveQuestionVote (authedUser, qid, vote) {
  return {
    type: SAVE_QUESTION_VOTE,
    authedUser,
    qid,
    vote,
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

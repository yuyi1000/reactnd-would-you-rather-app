import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { userAskQuestion, userSaveQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_VOTE = 'SAVE_QUESTION_VOTE'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function saveQuestionVote (authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_VOTE,
    authedUser,
    qid,
    answer,
  }
}

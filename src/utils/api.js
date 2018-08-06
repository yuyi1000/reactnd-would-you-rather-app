import {
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA'

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function getUserScore (user) {
  return getNumberOfAnseredQuestions(user) + getNumberOfCreatedQuestions(user)
}

export function getNumberOfAnseredQuestions (user) {
  return Object.keys(user.answers).length
}

export function getNumberOfCreatedQuestions (user) {
  return user.questions.length
}

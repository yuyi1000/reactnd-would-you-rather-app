import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getUsers,
  _getQuestions,
} from './_DATA'

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer ({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
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

export function getInitalData () {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function getTotalVote (question) {
  return getVoteForOptionOne(question) + getVoteForOptionTwo(question)
}

export function getVoteForOptionOne (question) {
  return question.optionOne.votes.length
}

export function getVoteForOptionTwo (question) {
  return question.optionTwo.votes.length
}

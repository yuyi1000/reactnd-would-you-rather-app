import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_VOTE } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: {...action.question}
      }
    case SAVE_QUESTION_VOTE :
    const { authedUser, qid, answer } = action
      return {
        ...state,
        [state.qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      }
    default :
      return state
  }
}

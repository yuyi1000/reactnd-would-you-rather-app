import { RECEIVE_USERS, USER_ASK_QUESTION, USER_SAVE_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case USER_ASK_QUESTION :
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.concat(action.qid)
        }
      }
    case USER_SAVE_QUESTION :
      const { user, qid, answer } = action
      return {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
            [qid]: answer            
          }
        }
      }
    default :
      return state
  }
}

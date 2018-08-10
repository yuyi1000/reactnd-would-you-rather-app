import { RECEIVE_USERS, USER_ASK_QUESTION } from '../actions/users'

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
    default :
      return state
  }
}

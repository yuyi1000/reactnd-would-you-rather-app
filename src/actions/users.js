export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ASK_QUESTION = 'USER_ASK_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userAskQuestion (user, qid) {
  return {
    type: USER_ASK_QUESTION,
    user,
    qid,
  }
}

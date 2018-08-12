export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ASK_QUESTION = 'USER_ASK_QUESTION'
export const USER_SAVE_QUESTION = 'USER_SAVE_QUESTION'

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

export function userSaveQuestion (user, qid, answer) {
  return {
    type: USER_SAVE_QUESTION,
    user,
    qid,
    answer,
  }
}

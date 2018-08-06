import { getInitalData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitalData () {
  return (dispatch) => {
    return getInitalData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}

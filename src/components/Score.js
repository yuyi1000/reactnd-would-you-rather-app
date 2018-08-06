import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserScore, getNumberOfAnseredQuestions, getNumberOfCreatedQuestions } from '../utils/api'


class Score extends Component {

  render() {
    const { user } = this.props

    return (
      <h2>
        we have a user {user.name},
        Answered questions: {getNumberOfAnseredQuestions(user)},
        Created quetions: {getNumberOfCreatedQuestions(user)}, 
        Total score: {getUserScore(user)}
      </h2>
    )
  }

}

function mapStateToProps ({users}, {userId}) {
  const user = users[userId]
  return {
    user,
  }
}


export default connect(mapStateToProps)(Score)

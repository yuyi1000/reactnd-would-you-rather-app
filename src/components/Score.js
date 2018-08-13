import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserScore, getNumberOfAnseredQuestions, getNumberOfCreatedQuestions } from '../utils/api'

class Score extends Component {

  render() {
    const { user } = this.props
    const { name, avatarURL } = user
    return (
      <div className='user-score'>
        <div className='user-score-avatar'>
          <img src={avatarURL} />
        </div>
        <div className='user-score-statistics'>
          <p>{name}</p>
          <p>Answered question: {getNumberOfAnseredQuestions(user)}</p>
          <p>Created quetions: {getNumberOfCreatedQuestions(user)}</p>
        </div>
        <div className='user-score-points'>
          Score: {getUserScore(user)}
        </div>
      </div>
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

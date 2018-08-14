import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import { getUserScore } from '../utils/api'
import { Redirect } from 'react-router-dom'

class Leaderboard extends Component {

  render() {
    const { userIds, authedUser } = this.props
    if (authedUser === null) {
      alert('Please login first.')
      return (
        <Redirect to='/login' />
      )
    }
    return (
      <div className='leaderboard'>
        <ul>
          {userIds.map((userId) => (
            <li key={userId}>
              <Score userId={userId} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  const userIds = Object.keys(users)
                  .sort((a, b) => getUserScore(users[b]) - getUserScore(users[a]))
  return {
    userIds,
    authedUser,
  }
}

export default connect(mapStateToProps)(Leaderboard)

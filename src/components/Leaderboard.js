import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import { getUserScore } from '../utils/api'

class Leaderboard extends Component {

  render() {
    const { userIds } = this.props
    return (
      <div>
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

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a, b) => getUserScore(users[b]) - getUserScore(users[a]))
  }
}

export default connect(mapStateToProps)(Leaderboard)

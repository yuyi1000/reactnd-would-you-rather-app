import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    const { authedUser } = this.props
    if (authedUser === null) {
      return (
        <nav>
          <ul>
            <li>
              <NavLink to='/login' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='active'>
                Leaderboard
              </NavLink>
            </li>
          </ul>
        </nav>
      )
    }

    return (
      <div>
        Nav, login.
      </div>
    )

  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Nav)

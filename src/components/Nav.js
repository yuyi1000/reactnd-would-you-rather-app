import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {


  handleLogout = (e) => {
    const { dispatch, history } = this.props

    e.preventDefault()
    dispatch(setAuthedUser(null))
    history.push('/')
    // return <Redirect to='/leaderboard' />
  }

  render() {
    const { authedUser, users } = this.props
    if (authedUser === null) {
      return (
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/home' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
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

    const { name, avatarURL } = users[authedUser]

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            Hello {name}
            <img src={avatarURL} width='20px' />
            <NavLink to='/' onClick={this.handleLogout} activeClassName='active'>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    )

  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    const { authedUser } = this.props
    if (authedUser === null) {
      return (
        <div>
          Nav, not login.
        </div>
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

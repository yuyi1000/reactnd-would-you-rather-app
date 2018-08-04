import React, { Component } from 'react'
import { connect } from 'react-redux'


class Login extends Component {

  render() {

    return (
      <h2>Login</h2>
    )
  }

}

export default connect()(Login)

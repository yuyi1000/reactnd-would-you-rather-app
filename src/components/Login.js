import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  state = {
    name: 'sarahedo',
  }

  handleChange = (e) => {
    const name = e.target.value
    this.setState({name})
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props
    const authedUserId = this.state.name
    e.preventDefault()
    console.log(this.state.name)
    dispatch(setAuthedUser(authedUserId))
  }

  render() {
    console.log(this.props)
    const { authedUser } = this.props
    console.log(authedUser);
    if (authedUser) {
      // TODO: use redirect to home page
      return (
        <Redirect to='/home' />
      )
    }

    return (
      <form className='sign-in-form' onSubmit={this.handleSubmit}>
        <label className='sign-in-label'>
          Sign in
          <select  value={this.state.value} onChange={this.handleChange}>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Login)

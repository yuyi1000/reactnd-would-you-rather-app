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
      return (
        <Redirect to='/home' />
      )
    }

    return (
      <div className='sign-in'>
        <div className='sign-in-direction'>
          Welcome to Would You Rather App. <br/>
          Please sign in to continue.
        </div>
        <div className='sign-in-form'>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="sarahedo">Sarah Edo</option>
              <option value="tylermcginnis">Tyler McGinnis</option>
              <option value="johndoe">John Doe</option>
            </select>
            <input type="submit" value="Sign in" />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Login)

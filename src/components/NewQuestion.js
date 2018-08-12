import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect, withRouter } from 'react-router-dom'


class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleOptionOneTextChange = (e) => {
    const optionOneText = e.target.value
    this.setState({optionOneText})
  }

  handleOptionTwoTextChange = (e) => {
    const optionTwoText = e.target.value
    this.setState({optionTwoText})
  }

  handleSubmit = (e) => {
    console.log(this.props)
    const { dispatch, authedUser, history } = this.props
    const { optionOneText, optionTwoText } = this.state
    e.preventDefault()
    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser))
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
    }))
    history.push('/home')
    console.log('new question has been submitted.')
  }

  render() {
    const { authedUser } = this.props
    if (authedUser === null) {
      alert('Please login first.')
      return (
        <Redirect to='/login' />
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Would you rather:
          <input type="text" value={this.state.value} onChange={this.handleOptionOneTextChange} />
          OR
          <input type="text" value={this.state.value} onChange={this.handleOptionTwoTextChange} />
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

export default withRouter(connect(mapStateToProps)(NewQuestion))

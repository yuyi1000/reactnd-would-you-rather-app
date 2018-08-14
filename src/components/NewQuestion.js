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
    const { dispatch, authedUser, history } = this.props
    const { optionOneText, optionTwoText } = this.state
    e.preventDefault()
    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser))
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
    }))
    history.push('/home')
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
      <div className='new-question'>
        <form className='new-question-form' onSubmit={this.handleSubmit}>
          <label>
            <p><b>Would you rather:</b></p>
            <input type="text" value={this.state.value} onChange={this.handleOptionOneTextChange} />
            <br/>OR<br/>
            <input type="text" value={this.state.value} onChange={this.handleOptionTwoTextChange} />
          </label>
          <br/>
          <input className='new-question-submit' type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))

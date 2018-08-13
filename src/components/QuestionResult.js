import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class QuestionResult extends Component {

  render() {
    const { question, authedUser } = this.props
    if (authedUser === null) {
      alert('There is something wrong. Please login first.')
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div>
        Name: {question.author},
        OptionOne: {question.optionOne.text},
        NumberOfOptionOne: {question.optionOne.votes.length},
        OptionTwo: {question.optionTwo.text},
        NumberOfOptionTwo: {question.optionTwo.votes.length}
      </div>
    )
  }

}

function mapStateToProps ({ questions, authedUser }, { match }) {
  const { question_id } = match.params
  return {
    question: questions[question_id],
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionResult)

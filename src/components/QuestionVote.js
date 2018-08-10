import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class QuestionVote extends Component {

  render() {
    const { question, authedUser } = this.props

    if (authedUser === null) {
      alert('Please login first.')
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div>
        Name: {question.author},
        OptionOne: {question.optionOne.text},
        OptionTwo: {question.optionTwo.text}
        <button>
          Vote
        </button>
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

export default connect(mapStateToProps)(QuestionVote)

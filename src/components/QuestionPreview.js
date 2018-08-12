import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class QuestionPreview extends Component {

  showQuestionDetail = (e, id, isAnswered) => {
    const { history } = this.props
    e.preventDefault()
    if (isAnswered) {
      history.push(`/questions/${id}`)
    } else {
      history.push(`/vote/${id}`)
    }
  }

  render() {
    const { question, isAnswered } = this.props

    return (
      <div>
        Name: {question.author},
        OptionOne: {question.optionOne.text},
        OptionTwo: {question.optionTwo.text}
        <button onClick={(e) => this.showQuestionDetail(e, question.id, isAnswered)}>
          View Poll
        </button>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, { questionId }) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const isAnswered = answeredQuestions.includes(questionId)
  return {
    question: questions[questionId],
    isAnswered,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))

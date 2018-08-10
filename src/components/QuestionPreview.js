import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class QuestionPreview extends Component {

  showQuestionVote = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/vote/${id}`)
  }

  render() {
    const { question } = this.props

    return (
      <div>
        Name: {question.author},
        OptionOne: {question.optionOne.text},
        OptionTwo: {question.optionTwo.text}
        <button onClick={(e) => this.showQuestionVote(e, question.id)}>
          View Poll
        </button>
      </div>
    )
  }
}

function mapStateToProps ({ questions }, { questionId }) {
  return {
    question: questions[questionId]
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))

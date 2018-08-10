import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {

  render() {
    const { question } = this.props

    return (
      <div>
        Name: {question.author},
        OptionOne: {question.optionOne.text},
        OptionTwo: {question.optionTwo.text}
        <button>
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

export default connect(mapStateToProps)(QuestionPreview)

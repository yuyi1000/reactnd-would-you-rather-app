import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionResult extends Component {

  render() {
    const { question } = this.props

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

function mapStateToProps ({ questions }, { questionId }) {
  return {
    question: questions[questionId]
  }
}

export default connect(mapStateToProps)(QuestionResult)

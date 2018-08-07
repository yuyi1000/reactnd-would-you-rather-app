import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {

  render() {
    const { answeredQuestion } = this.props

    return (
      <div>
        Name: {answeredQuestion.author},
        OptionOne: {answeredQuestion.optionOne.text},
        NumberOfOptionOne: {answeredQuestion.optionOne.votes.length},
        OptionTwo: {answeredQuestion.optionTwo.text},
        NumberOfOptionTwo: {answeredQuestion.optionTwo.votes.length}
      </div>
    )
  }

}

function mapStateToProps ({ questions }, { questionId }) {
  return {
    answeredQuestion: questions[questionId]
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)

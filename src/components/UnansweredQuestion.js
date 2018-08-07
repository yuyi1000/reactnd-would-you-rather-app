import React, { Component } from 'react'
import { connect } from 'react-redux'

class UnansweredQuestion extends Component {

  render() {
    const { unansweredQuestion } = this.props

    return (
      <div>
        Name: {unansweredQuestion.author},
        OptionOne: {unansweredQuestion.optionOne.text},
        OptionTwo: {unansweredQuestion.optionTwo.text}
      </div>
    )
  }
}

function mapStateToProps ({ questions }, { questionId }) {
  return {
    unansweredQuestion: questions[questionId]
  }
}

export default connect(mapStateToProps)(UnansweredQuestion)

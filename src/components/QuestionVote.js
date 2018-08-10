import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionVote extends Component {

  render() {
    const { question } = this.props

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

function mapStateToProps ({ questions }, { match }) {
  console.log(match)
  const { question_id } = match.params
  return {
    question: questions[question_id]
  }
}

export default connect(mapStateToProps)(QuestionVote)

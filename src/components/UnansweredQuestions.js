import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalVote } from '../utils/api'
// import UnansweredQuestion from './UnansweredQuestion'
import QuestionPreview from './QuestionPreview'

class UnansweredQuestions extends Component {

  render() {
    const { unansweredQuestions } = this.props
    return (
      <div>

        <ul>
          {Object.keys(unansweredQuestions).map((questionId) => (
            <li key={questionId}>
              <QuestionPreview questionId={questionId} />
            </li>
          ))}

        </ul>

      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    unansweredQuestions: getUnansweredQuestions(questions)
  }
}

function getUnansweredQuestions (questions) {
  return Object.keys(questions)
          .filter((questionId) => getTotalVote(questions[questionId]) === 0)
          .sort((id1, id2) => questions[id1].timestamp > questions[id2].timestamp)
          .reduce((obj, questionId) => {
            obj[questionId] = questions[questionId]
            return obj
          }, {})
}

export default connect(mapStateToProps)(UnansweredQuestions)

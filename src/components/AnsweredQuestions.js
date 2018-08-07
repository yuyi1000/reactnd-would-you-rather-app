import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalVote } from '../utils/api'
import AnsweredQuestion from './AnsweredQuestion'

class AnsweredQuestions extends Component {

  render() {

    const { answeredQuestions } = this.props

    return (
      <div>

        <ul>
          {Object.keys(answeredQuestions).map((questionId) => (
            <li key={questionId}>
              <AnsweredQuestion questionId={questionId} />
            </li>
          ))}

        </ul>

      </div>
    )
  }

}

function mapStateToProps ({ questions }) {
  return {
    answeredQuestions: getAnseredQuestions(questions)
  }
}

function getAnseredQuestions (questions) {
  return Object.keys(questions)
          .filter((questionId) => getTotalVote(questions[questionId]) !== 0)
          .reduce((obj, questionId) => {
            obj[questionId] = questions[questionId]
            return obj
          }, {})
}

export default connect(mapStateToProps)(AnsweredQuestions)

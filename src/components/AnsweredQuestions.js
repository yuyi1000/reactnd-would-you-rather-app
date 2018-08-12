import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalVote } from '../utils/api'
import QuestionPreview from './QuestionPreview'

class AnsweredQuestions extends Component {

  render() {

    const { answeredQuestions } = this.props

    return (
      <div>

        <ul>
          {Object.keys(answeredQuestions).map((questionId) => (
            <li key={questionId}>
              <QuestionPreview questionId={questionId} />
            </li>
          ))}

        </ul>

      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  return {
    answeredQuestions: getAnsweredQuestions(questions, users, authedUser)
  }
}

function getAnsweredQuestions (questions, users, authedUser) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
  return Object.keys(questions)
          .filter((questionId) => answeredQuestions.includes(questionId))
          .sort((id1, id2) => questions[id1].timestamp > questions[id2].timestamp)
          .reduce((obj, questionId) => {
            obj[questionId] = questions[questionId]
            return obj
          }, {})
}


export default connect(mapStateToProps)(AnsweredQuestions)

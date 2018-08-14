import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class QuestionResult extends Component {

  render() {
    const { question, authedUser, name, avatarURL } = this.props
    if (authedUser === null) {
      alert('There is something wrong. Please login first.')
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div className='question-result'>
        <div className='question-result-name'>
          Asked by {name}: <br/>
        </div>
        <div>
          <div className='question-result-avatar'>
            <img src={avatarURL} />
          </div>
          <div className='question-result-details'>
            OptionOne: {question.optionOne.text},
            NumberOfOptionOne: {question.optionOne.votes.length},
            OptionTwo: {question.optionTwo.text},
            NumberOfOptionTwo: {question.optionTwo.votes.length}
          </div>
        </div>

      </div>

    )
  }

}

function mapStateToProps ({ questions, authedUser, users }, { match }) {
  const { question_id } = match.params
  const question = questions[question_id]
  const { name, avatarURL } = users[question.author]
  return {
    question,
    authedUser,
    name,
    avatarURL,
  }
}

export default connect(mapStateToProps)(QuestionResult)

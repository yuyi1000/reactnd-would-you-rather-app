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

    const numberOfOptionOne = question.optionOne.votes.length
    const numberOfOptionTwo = question.optionTwo.votes.length
    const numberOfTotal = numberOfOptionOne + numberOfOptionTwo

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
            <p>Results:</p>
            <div className='question-result-detail'>
              Would you rather {question.optionOne.text} <br/>
              Percentage: {(numberOfOptionOne / numberOfTotal * 100).toFixed()}% <br/>
              {numberOfOptionOne} out of {numberOfTotal} votes <br/>
            </div>
            <div className='question-result-detail'>
              Would you rather {question.optionTwo.text} <br/>
              Percentage: {(numberOfOptionTwo / numberOfTotal * 100).toFixed()}% <br/>
              {numberOfOptionTwo} out of {numberOfTotal} votes <br/>
            </div>
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

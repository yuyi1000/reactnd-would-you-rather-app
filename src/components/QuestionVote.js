import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared'

class QuestionVote extends Component {

  state = {
    selectedOption: 'optionOne',
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    })
  }

  handleSubmit = (e, authedUser, qid, answer) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(handleSaveQuestionAnswer(authedUser, qid, answer))
    this.props.history.push(`/questions/${qid}`)
  }

  render() {
    const { question, authedUser, users } = this.props
    const { selectedOption } = this.state
    if (authedUser === null) {
      alert('Please login first.')
      return (
        <Redirect to='/login' />
      )
    }

    const { name, avatarURL } = users[question.author]
    const imgAlt = `avatar of ${name}`

    return (
      <div className='question-vote'>
        <div className='question-vote-name'>
          {name} asks: <br/>
        </div>
        <div>
          <div className='question-vote-avatar'>
            <img src={avatarURL} alt={imgAlt} />
          </div>
          <div className='question-vote-options'>
            <form onSubmit={(e) => this.handleSubmit(e, authedUser, question.id, selectedOption)}>
              <div className="radio">
                <label>
                  <input type="radio" value="optionOne" checked={selectedOption === 'optionOne'} onChange={this.handleOptionChange} />
                  {question.optionOne.text}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="optionTwo" checked={selectedOption === 'optionTwo'} onChange={this.handleOptionChange} />
                  {question.optionTwo.text}
                </label>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, { match }) {
  const { question_id } = match.params
  return {
    question: questions[question_id],
    authedUser,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionVote))

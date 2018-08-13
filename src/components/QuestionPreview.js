import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class QuestionPreview extends Component {

  showQuestionDetail = (e, id, isAnswered) => {
    const { history } = this.props
    e.preventDefault()
    if (isAnswered) {
      history.push(`/questions/${id}`)
    } else {
      history.push(`/vote/${id}`)
    }
  }

  render() {
    const { question, isAnswered, name, avatarURL } = this.props

    return (
      <div className='question-preview'>
        <div className='question-preview-name'>
          {name} asks: <br/>
        </div>
        <div>
          <div className='question-preview-avatar'>
            <img src={avatarURL} />
          </div>
          <div className='question-preview-options'>
            <b>Would you rather</b><br/>
            ...{question.optionOne.text.substring(0, 20)}... <br/>
            <button onClick={(e) => this.showQuestionDetail(e, question.id, isAnswered)}>
              View Poll
            </button>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, { questionId }) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const isAnswered = answeredQuestions.includes(questionId)
  const question = questions[questionId]
  const { name, avatarURL } = users[question.author]
  return {
    question,
    isAnswered,
    name,
    avatarURL,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class QuestionVote extends Component {

  state = {
    selectedOption: 'optionOne',
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    })
  }

  render() {
    const { question, authedUser } = this.props
    const { selectedOption } = this.state
    if (authedUser === null) {
      alert('Please login first.')
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <form className='vote-form' onSubmit={this.handleSubmit}>
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
    )
  }
}

function mapStateToProps ({ questions, authedUser }, { match }) {
  const { question_id } = match.params
  return {
    question: questions[question_id],
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionVote)

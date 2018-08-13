import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestions from './UnansweredQuestions'
import AnsweredQuestions from './AnsweredQuestions'
import { Redirect } from 'react-router-dom'


class Home extends Component {

  state = {
    showUnansweredQuestions: true,
  }

  jumpToUnansweredQuestions = () => {
    this.setState({
      showUnansweredQuestions: true,
    })
  }

  jumpToAnsweredQuestions = () => {
    this.setState({
      showUnansweredQuestions: false,
    })
  }

  render() {
    const { authedUser } = this.props
    const { showUnansweredQuestions } = this.state
    if (authedUser === null) {
      alert('Please login first.')
      return (
        <Redirect to='/login' />

      )
    }

    const renderQuestions = showUnansweredQuestions ? <UnansweredQuestions /> : <AnsweredQuestions />

    return (
      <div className='home-view'>
        <nav>
          <button className='home-nav' onClick={this.jumpToUnansweredQuestions}>
            Unanswered Questions
          </button>
          <button className='home-nav' onClick={this.jumpToAnsweredQuestions}>
            Answered Questions
          </button>
        </nav>
        {renderQuestions}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Home)

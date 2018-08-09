import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestions from './UnansweredQuestions'
import AnsweredQuestions from './AnsweredQuestions'
import { Redirect } from 'react-router-dom'


class Home extends Component {


  render() {
    const { authedUser } = this.props
    if (authedUser === null) {
      return (
        <Redirect to='/login' />
      )
    }
    
    return (
      <AnsweredQuestions />
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Home)

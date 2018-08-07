import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestions from './UnansweredQuestions'
import AnsweredQuestions from './AnsweredQuestions'

class Home extends Component {


  render() {
    return (
      <AnsweredQuestions />
    )
  }
}

export default connect()(Home)

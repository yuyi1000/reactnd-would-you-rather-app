import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestions from './UnansweredQuestions'

class Home extends Component {


  render() {
    return (
      <UnansweredQuestions />
    )
  }
}

export default connect()(Home)

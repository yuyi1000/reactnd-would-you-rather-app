import React, { Component } from 'react'
import { connect } from 'react-redux'

class UnansweredQuestion extends Component {

  render() {


    return (
      <h3>
        this is UnansweredQuestion.
      </h3>
    )
  }

}

export default connect()(UnansweredQuestion)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {

  render() {


    return (
      <h3>
        this is AnsweredQuestion.
      </h3>
    )
  }

}

export default connect()(AnsweredQuestion)

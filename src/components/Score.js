import React, { Component } from 'react'
import { connect } from 'react-redux'

class Score extends Component {


  render() {
    return (
      <h2>
        this is score panel.
      </h2>
    )
  }

}

export default connect()(Score)

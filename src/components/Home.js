import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {


  render() {
    return (
      <h2>
        this is home.
      </h2>
    )
  }
}

export default connect()(Home)

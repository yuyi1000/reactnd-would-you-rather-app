import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {

  render() {

    return (

      <h1>Hello world.</h1>
    )

  }

}


export default connect()(App)

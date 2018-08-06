import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {


  render() {

    return (
      <div>
        <h1>Hello world.</h1>
        {/* <Login /> */}
        {/* <NewQuestion /> */}
        <Leaderboard />
      </div>
    )

  }

}


export default connect()(App)

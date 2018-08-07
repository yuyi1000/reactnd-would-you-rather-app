import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Home from './Home'
import { handleInitalData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitalData())
  }

  render() {

    return (
      <div>
        <h1>Hello world.</h1>
        {/* <Login /> */}
        {/* <NewQuestion /> */}
        {/* <Leaderboard /> */}
        <Home />
      </div>
    )

  }

}


export default connect()(App)

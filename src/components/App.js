import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Home from './Home'
import Nav from './Nav'
import { handleInitalData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitalData())
  }

  render() {

    return (
      <Router>
        <Fragment>
          <Nav />
          {/* <Login /> */}
          {/* <NewQuestion /> */}
          {/* <Leaderboard /> */}
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Login} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/add' component={NewQuestion} />
        </Fragment>
      </Router>
    )

  }

}


export default connect()(App)

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Home from './Home'
import Nav from './Nav'
import QuestionVote from './QuestionVote'
import QuestionResult from './QuestionResult'
import Error from './Error'
import { handleInitalData } from '../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/' exact component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/vote/:question_id' component={QuestionVote} />
            <Route path='/questions/:question_id' component={QuestionResult} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}


export default connect()(App)

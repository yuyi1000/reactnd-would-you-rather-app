import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleOptionOneTextChange = (e) => {
    const optionOneText = e.target.value
    this.setState({optionOneText})
  }

  handleOptionTwoTextChange = (e) => {
    const optionTwoText = e.target.value
    this.setState({optionTwoText})
  }

  handleSubmit = (e) => {
    console.log(this.props)
    const { dispatch } = this.props
    const { optionOneText, optionTwoText } = this.state
    // TODO: hard coded auther here, change to a login user later.
    const author = 'tylermcginnis'
    e.preventDefault()
    dispatch(handleAddQuestion(optionOneText, optionTwoText, author))
    console.log('new question has been submitted.')

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Would you rather:
          <input type="text" value={this.state.value} onChange={this.handleOptionOneTextChange} />
          OR
          <input type="text" value={this.state.value} onChange={this.handleOptionTwoTextChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect()(NewQuestion)

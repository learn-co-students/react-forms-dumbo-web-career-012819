// Code ControlledInput Component Here

import React from 'react'

export default class ControlledInput extends React.Component {

  state = {
    firstName: "Rick",
    lastName: "Sanchez"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
      </form>
    )
  }
}

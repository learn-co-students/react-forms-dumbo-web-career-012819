// Code ControlledInput Component Here
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

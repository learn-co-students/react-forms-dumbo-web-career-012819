// Code ControlledInput Component Here

import React from 'react'

class ControlledInput extends React.Component {

    state = {
        value: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        this.sendFormDataSomewhere(this.state)
    }


    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
                <input
                    type="text"
                    onChange={e => this.handleChange}
                    value={this.state.value}
                />
            </form>
        )
    }
}

export default ControlledInput;

import React, { Component } from 'react'

export class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.match.params.name} to todo app!
            </div>
        )
    }
}

export default WelcomeComponent

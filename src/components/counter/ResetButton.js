import React, { Component } from 'react'

export class ResetButton extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.reset = this.reset.bind(this);
    }
    render() {

        const resetButtonStyle = {
            fontSize: "50px",
            backgroundColor: "yellow",
            color: "white",
            width: "225px",
            padding: "15 px"
        }

        return (
            <div>
                <button style={resetButtonStyle} onClick={this.reset}>RESET</button>
            </div>
        )
    }

    reset() {
        this.setState = ( (prevState) => {
            return {counter: 0}
        })
        this.props.resetMethod();
    }

}

export default ResetButton

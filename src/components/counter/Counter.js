import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Counter.css';

export class Counter extends Component {

    // Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {

        const spanStyle = {
            fontSize: "50px",
            padding: "10px 10px"
        };

        return (
            <div>
                <button className="green-button" onClick={this.increment}>+{this.props.by}</button>
                <span className="count" style={spanStyle}>{ this.state.counter }</span>
                <button className="red-button" onClick={this.decrement}>-{this.props.by}</button>
            </div>
        )
    }

    increment() { //Update state => counter++
        this.setState({
            counter: this.state.counter + this.props.by
        });
    }

    decrement() {
        this.setState({
            counter: this.state.counter - this.props.by
        })
    }
}

Counter.defaultProps = {
    by: 1
}

Counter.propTypes = {
    by: PropTypes.number
}



export default Counter

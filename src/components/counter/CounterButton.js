import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './CounterButton.css';

export class CounterButton extends Component {

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
        return (
            <div>
                <button className="green-button" onClick={this.increment}>+{this.props.by}</button>
                <button className="red-button" onClick={this.decrement}>-{this.props.by}</button>
            </div>
        )
    }

    increment() { //Update state => counter++
        this.setState((prevState) => {
            return {
                counter: prevState.counter + this.props.by
            }
        });

        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.setState((prevState) => {
            return {counter: prevState.counter - this.props.by}
        })

        this.props.decrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}



export default CounterButton

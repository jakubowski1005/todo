import React, { Component } from 'react'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton';

export class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {

        const spanStyle = {
            fontSize: "100px",
            padding: "10px 80px"
        };

        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count" style={spanStyle}>{ this.state.counter }</span>
                <ResetButton resetMethod={this.reset} />
            </div>
        )
    }

    increment(by) {
        this.setState( (prevState) => {
            return {counter: prevState.counter + by}
        });
    }

    decrement(by) {
        this.setState( (prevState) => {
            return {counter: prevState.counter - by}
        });
    }

    reset() {
        this.setState({ counter: 0 });
    }
}

export default Counter

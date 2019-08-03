import React, { Component } from 'react'
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
        return (
            <div>
                <button onClick={this.increment}>+1</button>
                <span className="count">{ this.state.counter }</span>
                <button onClick={this.decrement}>-1</button>
            </div>
        )
    }

    increment() { //Update state => counter++
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
}



export default Counter

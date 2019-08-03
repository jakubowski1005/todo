import React, { Component } from 'react';
//import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                {/* <Counter /> */}
                <TodoApp />
            </div>
        );
    }
}

export default App;

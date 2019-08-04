import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp.jsx';
import './App.css';
import './bootstrap.css'

class App extends Component {

    render() {
        return (
            <div>
                <TodoApp />
            </div>
        );
    }
}

export default App;

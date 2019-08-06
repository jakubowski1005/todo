import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp.jsx';
import SemanticPlayground from './components/semantic-ui-playground/SemanticPlayground.jsx';
import './App.css';
import './bootstrap.css'
//import 'semantic-ui-css/semantic.min.css'

class App extends Component {

    render() {
        return (
            <div>
                <TodoApp />
                {/* <SemanticPlayground /> */}
            </div>
        );
    }
}

export default App;

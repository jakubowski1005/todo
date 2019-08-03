import React, { Component } from 'react'
import LoginComponent from './LoginComponent'

export class TodoApp extends Component {
    render() {
        return (
            <div>
                <div>My todo app</div>
                <LoginComponent />
            </div>
        )
    }
}

export default TodoApp


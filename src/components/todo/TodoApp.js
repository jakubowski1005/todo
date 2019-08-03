import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'

export class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/" component={WelcomeComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </>
            </Router>
                {/* <div>My todo app</div>
                <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

export default TodoApp


import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'

export class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
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


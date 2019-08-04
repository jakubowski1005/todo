import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

export class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/welcome" className="navbar-brand">Done!</a></div>
                    <ul className="navbar-nav">
                        <li><Link to="/welcome/jakubowski1005" className="nav-link">Home</Link></li>
                        <li><Link to="/todos" className="nav-link">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent

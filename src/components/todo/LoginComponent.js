import React, { Component } from 'react'

export class LoginComponent extends Component {
    constructor() {
        super();

        this.state = {
            username: "jakubowski1005",
            password: ""
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event) {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div>
               Username: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
               Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
               <button>Login</button>
            </div>
        )
    }
}

export default LoginComponent

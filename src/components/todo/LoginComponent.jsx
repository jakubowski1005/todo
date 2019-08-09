import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

export class LoginComponent extends Component {
    constructor() {
        super();

        this.state = {
            username: "jakubowski1005",
            password: "",
            showSuccessMessage: false,
            hasLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    loginClicked() {
        // if(this.state.username==='jakubowski1005' && this.state.password==="pass") {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     this.setState({showSuccessMessage: true});
        //     this.setState({hasLoginFailed: false});
        // } else {
        //     this.setState({showSuccessMessage: false});
        //     this.setState({hasLoginFailed: true});
        // }

        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //         this.props.history.push(`/welcome/${this.state.username}`);
        //     }).catch( () => {
        //         this.setState({showSuccessMessage: false});
        //         this.setState({hasLoginFailed: true});
        //     })

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((res) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, res.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
            }).catch(() => {
                this.setState({
                    showSuccessMessage: false
                });
                this.setState({
                    hasLoginFailed: true
                });
            })
    }

    handleChange(event) {
          this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
               </div>
            </div>
        )
    }
}

export default LoginComponent

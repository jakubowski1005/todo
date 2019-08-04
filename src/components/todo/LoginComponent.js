import React, { Component } from 'react'

export class LoginComponent extends Component {
    constructor() {
        super();

        this.state = {
            username: "jakubowski1005",
            password: "",
            showSuccessMessage: false,
            hasLoginFailed: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    loginClicked() {
        console.log(this.state);
        if(this.state.username==='jakubowski1005' && this.state.password==="pass") {
            //console.log('Successful');
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({showSuccessMessage: true});
            this.setState({hasLoginFailed: false});
        } else {
            console.log('Failed');
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
        }
    }

    handleChange(event) {
        //console.log(`You change ${event.target.name} into ${event.target.value}`)

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         username: event.target.value
    //     });
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* <ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
               </div>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessful(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default LoginComponent

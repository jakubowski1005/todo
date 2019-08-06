import React, { Component } from 'react'
import { Form, Input, Button, Header } from 'semantic-ui-react'
import AuthenticationService from './AuthenticationService.js'

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            successfulLogin: false,
            loginFailed: false
        }

        this.loginButtonClicked = this.loginButtonClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    loginButtonClicked() {
        if(this.state.username === 'user' && this.state.password === 'pass') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push('/profile/username');
            console.log('Login successful');
            this.setState({successfulLogin: true});
            this.setState({loginFailed: false});
            console.log(this.state);
        } else {
            this.setState({loginFailed: true});
            console.log('Login failed');
            
            this.setState({successfulLogin: false});
            console.log(this.state);
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div style={{padding: "200px"}}>
                <Header as="h2">Sign In</Header>
                <Form.Field>
                    <label>Enter Username:</label>
                    <Input type='text' style={{padding: "15px"}} name="username" value={this.state.username} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Enter Password:</label>
                    <Input type='password' style={{padding: "15px"}} name="password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Field>
                <Button color="blue" size="large" style={{padding: "15px"}} onClick={this.loginButtonClicked}>Sign In</Button>
            </div>
        )
    }
}

export default SignIn

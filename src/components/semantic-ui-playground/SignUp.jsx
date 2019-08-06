import React, { Component } from 'react'
import { Header, Form, Input, Button } from 'semantic-ui-react'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.registerButtonClicked = this.registerButtonClicked.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    registerButtonClicked() {
        console.log(`You have just created account. Username: '${this.state.username}', password: '${this.state.password}'.`)
    }

    render() {
        return (
            <div style={{padding: "200px"}}>
                <Header as="h2">Sign Up</Header>
                <Form.Field>
                    <label>Enter Username:</label>
                    <Input type='text' style={{padding: "15px"}} name="username" value={this.state.username} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Enter Password:</label>
                    <Input type='password' style={{padding: "15px"}} name="password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Field>
                <Button color="blue" size="large" style={{padding: "15px"}} onClick={this.registerButtonClicked}>Sign Up</Button>
            </div>
        )
    }
}

export default SignUp

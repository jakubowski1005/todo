import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            username: this.props.match.params.name,
            welcomeMessage: '',
            errorMessage: ''
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this); 
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(res => {
                this.handleSuccessfulResponse(res)
                console.log(res)
                })
            .catch(err => this.handleError(err))
    }

    handleSuccessfulResponse(res) {
        this.setState({
            welcomeMessage: res.data.content
        })
    }

    handleError(err) {
        console.log(err.response)
        let errorMessage = '';

        if(err.message)
            errorMessage += err.message

        if(err.response && err.response.data)
            errorMessage += err.response.data.message
        
        this.setState({welcomeMessage: errorMessage})
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.match.params.name} to todo app! You can manage your todos <Link to="/todos">here</Link>.
                </div>

                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Click here</button>
                </div>
                {this.state.errorMessage !== '' && <div className="alert alert-danger">{this.state.errorMessage}</div>}
                <div>{this.state.welcomeMessage}</div>
            </>
        )
    }
}

export default WelcomeComponent

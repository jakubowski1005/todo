import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import AuthenticationService from './AuthenticationService';
import UserService from '../../api/todo/UserService.js'

export class RegisterComponent extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    onSubmit(values) {
        console.log(values);
    }

    validate(values) {
        let users = UserService.retrieveAllUsers()
        console.log(users)
        let errors = {}
        if(values.password !== values.passwordConfirmation)
            errors.password = 'Wrong password confirmation'
        
        if(!values.email.includes('@'))
            errors.email = 'Wrong email'
        
        if(AuthenticationService.isUserLoggedIn()) 
            errors.username = 'You cannot be logged'

        for(let user in users) {
            if(user.username === values.username) {
                errors.username = "Username already exists"
            }
        }
        return errors
    }

    render() {

        let { username, email, password, passwordConfirmation } = this.state;

        return (
            <>
                <h1>Sign up</h1>
                <div className="container">
                    <Formik
                        initialValues={{ username, email, password, passwordConfirmation }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}>
                    { (props) => (
                        <Form>
                                <ErrorMessage name="username" component="div"
                                        className="alert alert-warning" />
                                <ErrorMessage name="email" component="div"
                                        className="alert alert-warning" />
                                <ErrorMessage name="password" component="div"
                                        className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Username</label>
                                    <Field className="form-control" type="text" name="username" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>E-mail</label>
                                    <Field className="form-control" type="text" name="email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className="form-control" type="text" name="password" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Repeat password</label>
                                    <Field className="form-control" type="text" name="passwordConfirmation" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Sign up</button>
                        </Form>
                        )
                    }
                    </Formik>
                </div>
            </>
        )
    }
}

export default RegisterComponent

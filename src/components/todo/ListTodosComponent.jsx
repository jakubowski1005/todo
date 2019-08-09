import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import  moment from 'moment';

export class ListTodosComponent extends Component {
    constructor() {
        super()
        console.log('constructor')
        this.state = {
            todos: [],
            username: AuthenticationService.getLoggedInUsername(),
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos();
        
    }

    refreshTodos() {
        TodoDataService.retrieveAllTodos(this.state.username)
            .then( res => {
                console.log(res.data)
                this.setState({todos: res.data})
            })
    }

    deleteTodoClicked(id) {
        console.log(`id: ${id}  username: ${this.state.username}`)
        TodoDataService.deleteTodo(this.state.username, id)
            .then(res => {
                this.setState({message: `Delete of todo ${id} successful`})
                this.refreshTodos();
            })
    }

    addTodoClicked() {
        this.props.history.push(`/jpa/users/${this.state.username}/todos/-1`)
    }

    updateTodoClicked(id) {
        console.log(`Updating todo: id: ${id} username: ${this.state.username}`)
        this.props.history.push(`/jpa/users/${this.state.username}/todos/${id}`)
    }

    componentWillUnmount() {
        console.log('component did unmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message!==null && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>done</th>
                                <th>target date</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.todos.map( (todo) => 
                            <tr key={todo.id}>
                                <td>{ todo.description }</td>
                                <td>{ moment(todo.targetDate).format('YYYY-MM-DD HH:mm') }</td>
                                <td>{ todo.completed.toString() }</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent

import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

export class ListTodosComponent extends Component {
    constructor() {
        super()
        console.log('constructor')
        this.state = {
            todos: [],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos();
        
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
            .then( res => {
                console.log(res.data)
                this.setState({todos: res.data})
            })
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUsername();
        console.log(`id: ${id}  username: ${username}`)
        TodoDataService.deleteTodo(username, id)
            .then(res => {
                this.setState({message: `Delete of todo ${id} successful`})
                this.refreshTodos();
            })
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
                                <td>{ todo.completed.toString() }</td>
                                <td>{ todo.targetDate.toString() }</td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent

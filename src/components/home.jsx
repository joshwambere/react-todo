import React, { Component } from 'react';
import '../App.css';
import AddTodo from './addTodo.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loader from './img/loader.gif';
import axios from 'axios';

library.add(faTrash)



class Home extends Component {
    state = {
        todos: [],
        todo: '',
        isLoading: false
    };
    addTodo = (e) => {
        this.setState({ isLoading: true })
        this.loading = true
        axios.post('https://joh-n-son-react-api.herokuapp.com/api/todos/add', {
            name: e.title,
            completed: e.completed
        })

            .then(res => this.setState({ todos: [...this.todos, res.data] }))
            .catch(err => console.log(err))
            .finally(() => (this.setState({ isLoading: false })))

    }


    popOutTodo = (id) => {
        this.setState({ isLoading: true })
        let Items = this.state.todos;
        axios.delete(`https://joh-n-son-react-api.herokuapp.com/api/todo/delete/${id}`)
            .then(this.Items = this.setState({ todos: Items.filter(todo => todo._id !== id) })
            )
            .catch(err => console.log(err))
            .finally(() => (this.setState({ isLoading: false })))


    }
    todoCompleted(id) {
        this.setState({ isLoading: true })
        const Items = this.state.todos.map(todo => {
            if (todo._id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: Items });
        this.setState({ isLoading: false })
    }
    created = () => {

        axios.get('https://joh-n-son-react-api.herokuapp.com/api/todos')
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err));

    }
    componentDidMount() {
        this.created();
    }
    render() {

        return (
            <div className="home-sect">
                {this.created()}
                <AddTodo newTodo={this.addTodo} />
                <div className="addTodo pt-2">
                    <div className="container pt-0">
                        {this.state.isLoading ? <img className="laoder" src={loader} alt="" /> : ''}
                    </div>
                    <div className="container pt-1">
                        <span className="badge badge-info">Tasks</span>
                        {this.state.todos.length === 0 ? <h3 className="pt-2">No Task Yet</h3> : ''}
                        {this.state.todos.map(item =>
                            <div className="todo" key={item._id} >
                                <input onClick={() => this.todoCompleted(item._id)} className="todo-input" type="checkbox" name="todo" />
                                <label className="tod-lable" htmlFor="todo">{item.name}</label>
                                <FontAwesomeIcon className="icon-trash" icon={["fas", "trash"]} onClick={() => this.popOutTodo(item._id)} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
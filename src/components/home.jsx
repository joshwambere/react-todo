import React, { Component } from 'react';
import '../App.css';
import AddTodo from './addTodo.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loader from './img/loader.gif';

library.add(faTrash)



class Home extends Component {
    state = {
        todos: [],
        todo: '',
        isLoading: false
    };
    addTodo = (e) => {
        this.setState({isLoading:true})
        this.setState({ todo: e });
        let newArr = this.state.todos;
        newArr.push(e)
        this.setState({ todos: newArr });
        this.setState({isLoading:false})
    }
    popOutTodo = (id) => {
        this.setState({isLoading:true})
        let Items = this.state.todos;
        let i = Items.findIndex(popoutItem => popoutItem === id);
        Items.splice(i, 1)
        this.setState({ todos: Items });
        this.setState({isLoading:false})

    }
    todoCompleted(id) {
        this.setState({isLoading:true})
        const Items = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: Items });
        this.setState({isLoading:false})
    }
    render() {

        return (
            <div className="home-sect">
                <AddTodo newTodo={this.addTodo} />
                <div className="addTodo pt-2">
                    <div className="container pt-0">
                        {this.state.isLoading ? <img className="laoder" src={loader} alt="" /> : ''}
                    </div>
                    <div className="container pt-1">
                        <span className="badge badge-info">Tasks</span>
                        {this.state.todos.length===0? <h3 className="pt-2">No Task Yet</h3>:''}
                        {this.state.todos.map(item =>
                            <div className="todo" key={item.id} >
                                <input onClick={() => this.todoCompleted(item.id)} className="todo-input" type="checkbox" name="todo" />
                                <label className="tod-lable" htmlFor="todo">{item.title}</label>
                                <FontAwesomeIcon className="icon-trash" icon={["fas", "trash"]} onClick={() => this.popOutTodo(item.id)} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
import React, { Component } from 'react';
import nextId from "react-id-generator";
import '../App.css';

class addTodo extends Component {
    state = { 
        todo:"",
     }
     handleChange=(e)=>{
         this.setState({todo:e.target.value})
     }
    render() { 
        return ( 
            <div>
                <div className="container pt-5">
                    <div className="d-flex input-sect">
                        <input type="text" value={this.state.todo} onChange={this.handleChange} className="form-control addTodoInput" placeholder="Add task"/>
                        <button onClick={this.addNewTodo} className="btn btn-outline-info btn-rounded">AddTask</button>
                    </div>
                </div>
            </div>
         );
    }
    addNewTodo=()=>{
        if(this.state.todo.length===0){
            console.log('add anything');
        }else{
            let Todo={
                id:nextId(),
                title:this.state.todo,
                completed:false
            }
            this.props.newTodo(Todo);
            this.setState({todo:""})
        }
    }
}
 
export default addTodo;
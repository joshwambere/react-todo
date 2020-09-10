import React, { Component } from 'react';
import '../App.css';
import AddTodo from './addTodo.jsx';

class Home extends Component {
    state = { 
        todos:[],
        todo:''
     };
     handleTodo=(e)=>{
        this.setState({todo:e});
        let newArr=this.state.todos;
        newArr.push(e)
        this.setState({todos:newArr});
        
    }
    render() { 
  
        return ( 
            <div className="home-sect">
                <AddTodo newTodo={this.handleTodo}/>
                <div className="addTodo pt-5">
                <div className="container">
                    {this.state.todos.map(item=>
                        <div className="todo" key={item.id} >
                            <input className="todo-input" type="checkbox" name="todo"/>
                            <label className="tod-lable" htmlFor="todo">{item.title}</label>
                        </div>    
                    )}
                </div>
            </div>
            </div>
         );
    }
    
}
 
export default Home;
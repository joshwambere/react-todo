import React, { Component } from 'react';
import '../App.css';
import AddTodo from './addTodo.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash)

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
    popOutTodo=(id)=>{
        let Items=this.state.todos;
        let i=Items.findIndex(popoutItem=> popoutItem===id);
        Items.splice(i,1)
        this.setState({todos:Items});
       
    }
    todoCompleted(id){
        const Items = this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          });
        this.setState({todos:Items});
        console.log(Items);
    }
    render() { 
  
        return ( 
            <div className="home-sect">
                <AddTodo newTodo={this.handleTodo}/>
                <div className="addTodo pt-5">
                <div className="container">
                    {this.state.todos.map(item=>
                        <div className="todo" key={item.id} >
                            <input onClick={()=>this.todoCompleted(item.id)} className="todo-input" type="checkbox" name="todo"/>
                            <label className="tod-lable" htmlFor="todo">{item.title}</label>
                            <FontAwesomeIcon className="icon-trash" icon={["fas", "trash"]} onClick={()=>this.popOutTodo(item.id)} />
                        </div>    
                    )}
                </div>
            </div>
            </div>
         );
    }
    
}
 
export default Home;
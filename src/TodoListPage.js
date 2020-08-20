import React, { Component } from 'react'
import { getTodos, createTodo, deleteTodo } from './TodosApi.js';
import { Link } from 'react-router-dom';
export default class TodoPageList extends Component {
    
    state = {
        todos: []
    }

        componentDidMount = async () => {
            if (!this.props.token){
                this.props.history.push('/login');
            }else{
                const data = await getTodos(this.props.token)

                this.setState({
                    todos: data.body
                })
            }
        }
handleNewTodo = e => {
    this.setState ({ todo: e.target.value});
}
handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await createTodo({
            todo: this.state.todo,
            completed: false,
        });
        this.setState({
            todo: '',
            completed: false

        });
    } catch(e) {
        console.log(e.message)
    }
}
handleDelete = async () => {
    await deleteTodo(this.props.match.params.id);

    this.props.history.push('/');
}


    render() {
        return (
            <div className="list">
                {
                    this.state.todos.map((todo) => {
                        return <Link to={`/todos/${todo.id}`}>
                            <p>Todo: {todo.todo}
                            </p>
                            <p>Completed: {todo.completed ? 'YES' : 'NO'}
                            </p>
                        </Link>
                    })
                }
               <div className="addtodo">
                   CARE TO ADD A TODO? ENTER BELOW
                   <form onSubmit={this.handleSubmit}>
                    <label>
                        New Todo: 
                        <input onChange={this.handleNewTodo} value = {this.state.todo}/>
                    </label>
                    <button>New Todo For You</button>
                   </form>
                   <button  onClick={this.handleDelete}>Delete</button>
                   
               </div>



            </div>
         
        )
    }
}

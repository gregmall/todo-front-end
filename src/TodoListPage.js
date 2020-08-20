import React, { Component } from 'react'
import { getTodos } from './TodosApi.js';
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




    render() {
        return (
            <div>
                {
                    this.state.todos.map((todo) => {
                        return <Link to={`/api/todos/${todo.id}`}>
                            <p>Todo: {todo.todo}
                            </p>
                            <p>Completed: {todo.completed}
                            </p>
                        </Link>
                    })
                }
               
            </div>
        )
    }
}

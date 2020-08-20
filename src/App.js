import React, { Component } from 'react'

import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
  
    
} from 'react-router-dom';

import AuthPage from './AuthPage.js';
import TodoListPage from './TodoListPage.js';
import HomePage from './HomePage.js';
import './App.css';




export default class App extends Component {

  state = {
    token: localStorage.getItem('token'),
  }
  handleToken = (token) => {
    this.setState({ token: token})
    localStorage.setItem('token', token)
  }

  clearToken = () => {
    this.setState({token: '' })
    localStorage.setItem('token', '')
  }

    render() {
        return (
            <div>
            
             
                <Router>
          
             <div>
               {
                 this.state.token &&
                 <>
               <Link to='/'>Home</Link>
               <Link to='/login'>login</Link>
               <Link to='/todo'>list</Link>
                </>
              }
             </div>
           
              
              
                    <Switch>
                    
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage handleToken={this.handleToken} token={this.state.token}{...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <AuthPage handleToken={this.handleToken} token={this.state.token}{...routerProps} />} 
                        />
                        <Route 
                            path="/todo" 
                            exact
                            render={(routerProps) => <TodoListPage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                        />
      
  
                    
                    </Switch>
                  
                </Router>
            </div>
        )
    }
}

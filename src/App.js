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
import Header from './Header.js'
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
                  <Header />
          <main>
            
          <div className="links">
               {
                 this.state.token &&
                 <ul>
               <li><Link to='/'>Home</Link></li>


               <li><Link to='/login'>login</Link></li>
               <li><Link to='/todo'>list</Link></li>
               </ul>
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
                    </main>
                </Router>
            </div>
        )
    }
}

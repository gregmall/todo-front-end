import React, { Component } from 'react'

import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
  
    
} from 'react-router-dom';

import AuthPage from './AuthPage.js';
import TodoPage from './TodoPage.js';
import HomePage from './HomePage.js';
import './App.css';




export default class App extends Component {
    render() {
        return (
            <div>
            
             
                <Router>
           
              
              
                    <Switch>
                    
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <AuthPage {...routerProps} />} 
                        />
      
  
                    
                    </Switch>
                  
                </Router>
            </div>
        )
    }
}

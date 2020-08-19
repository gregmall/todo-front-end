import React, { Component } from 'react'
import { userSignUp, userSignIn } from './TodosApi.js';


export default class AuthPage extends Component {

    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''

    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await userSignUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });
        this.props.handleToken(user.body.token);
        this.props.history.push('/');
    }

    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await userSignIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });
        this.props.handleToken(user.body.token);
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSignIn}>
                    Sign in? (returning user)
                    <label>
                        Email: 
                        <input onChange={e => this.setState({ signInEmail: e.target.value})} value={this.state.signInEmail}/>
                    </label>
                    <label>
                        Password:
                        <input onChange={e => this.setState({ signInPassword: e.target.value})} value={this.state.signInPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleSignUp}>
                    Sign up?
                    <label>
                        Email: 
                        <input onChange={e => this.setState({ signUpEmail: e.target.value})} value={this.state.signUpEmail}/>
                    </label>
                    <label>
                        Password:
                        <input onChange={e => this.setState({ signUpPassword: e.target.value})} value={this.state.signUpPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

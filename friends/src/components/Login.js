import axios from 'axios';
import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        loginCredentials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {
        this.setState({
            loginCredentials: {
                ...this.state.loginCredentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.loginCredentials)
        .then(res => {
            this.props.setIsLoggedIn(true)
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendslist')
        })
        .catch(err => {
            console.log(err)
        })
    };

    render() {
        return (
        <form onSubmit={this.login}>
            <label>Username:</label>
            <input
                type="text"
                name="username"
                value={this.state.loginCredentials.username}
                onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={this.state.loginCredentials.password}
                onChange={this.handleChange}
            />
            <button>Log in</button>
        </form>
    
        )
    }
}

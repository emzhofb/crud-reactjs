import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor () {
        super ()
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        const { username, password } = this.state
        axios.post("http://localhost:4000/users/login", {username, password}).then(res => {
            const token = res.data.data.token
            localStorage.setItem('token', token)
            this.props.history.push("/")
        }).catch(err => {
            console.log(err)
            this.setState({message: "pastikan username dan password benar"})
        })
        e.preventDefault()
    }
    render () {
        const token = !!localStorage.getItem('token')
        if (token) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                <h1>Login</h1>
                {
                    this.state.message !== '' && (
                        <div className="alert alert-danger" role="alert">
                            {this.state.message}
                        </div>
                    )
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Login
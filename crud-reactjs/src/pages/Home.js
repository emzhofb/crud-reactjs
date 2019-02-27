import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    render () {
        const token = localStorage.getItem('token')
        if (!token) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <h1>Home</h1>
        )
    }
}

export default Home
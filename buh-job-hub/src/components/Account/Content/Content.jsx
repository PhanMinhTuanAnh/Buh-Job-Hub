import React, { Component } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'

export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="my-account">
                    <ul className="tabs-nav">
                        <li className><a href="#tab1">Login</a></li>
                        <li><a href="#tab2">Register</a></li>
                    </ul>
                    <div class="tabs-container">
                        <Login/>
                        <Register/>
                    </div>
                </div>
            </div>
        );
    }
}




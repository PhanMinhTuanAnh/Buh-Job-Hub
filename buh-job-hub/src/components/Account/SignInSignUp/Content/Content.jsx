import React, { Component } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            active1: "active",
            active2: "",
        }
    }


    actionOnclick1 = () => {
        this.setState({
            active1: "active",
            active2: "",
        })
       
    }

    actionOnclick2 = () => {
        this.setState({
            active1: "",
            active2: "active",
        })
       
    }

    render() {
        let container = <Login/>
        if(this.state.active2 == "active")
            container = <Register/>
        return (
            <div className="container">
                <div className="my-account">
                    <ul className="tabs-nav">
                        <li class = {this.state.active1} onClick = {this.actionOnclick1}><a>Login</a></li>
                        <li class = {this.state.active2} onClick = {this.actionOnclick2}><a>Register</a></li>
                    </ul>
                    <div class="tabs-container">
                        {container}
                    </div>
                </div>
            </div>
        );
    }
}




import React, { Component } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'

export default class Content extends Component {
    render() {
        let container = <Login/>
        if(this.props.type_id == "1")
            container = <Register/>
        return (
            <div className="container">
                <div className="my-account">
                    <div class="tabs-container">
                        {container}
                    </div>
                </div>
            </div>
        );
    }
}




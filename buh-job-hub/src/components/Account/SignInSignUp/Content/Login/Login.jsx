import React, { Component } from 'react'
import {connect} from 'react-redux'
import {userLoginFetch} from '../../../../../react-redux/Login/login_action'
import { withRouter } from "react-router-dom";
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        
        event.preventDefault()
        this.props.userLoginFetch(this.state).then(() => {
            //console.log("State", this.state)
            this.props.history.push('/')});
    }
    render() {
        let style = {
            marginBottom : "40px"
        }
        return (
            <div className="tab-content" id="tab1"> 
                <form method="post" className="login" onSubmit={this.handleSubmit}>
                    <p className="form-row form-row-wide">
                        <label htmlFor="email">Email:
                            <i className="ln ln-icon-Male" />
                            <input type="text" className="input-text" name="email" id="email" defaultValue value={this.state.email} 
                            onChange={this.handleChange} placeholder='Email' />
                        </label>
                    </p>
                    <p className="form-row form-row-wide">
                        <label htmlFor="password">Password:
                            <i className="ln ln-icon-Lock-2" />
                            <input className="input-text" type="password" name="password" id="password" value={this.state.password} 
                            onChange={this.handleChange} placeholder='Password' />
                        </label>
                    </p>
                    <p className="form-row">
                        <input type="submit" className="button border fw margin-top-10" name="login" defaultValue="Login" />
                        <label htmlFor="rememberme" className="rememberme">
                        <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> Remember Me</label>
                    </p>
                    <p className="lost_password" style = {style}>
                        <a href="#">Lost Your Password?</a>
                    </p>
                </form>
            </div>

        );
    }  
}
const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})
export default connect(null, mapDispatchToProps) (withRouter(Login))

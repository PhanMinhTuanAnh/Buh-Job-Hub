import React, { Component } from 'react'
import {connect} from 'react-redux'
import {register} from '../../../../../react-redux/Register/register_action'
import { withRouter } from "react-router-dom";
class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user_type_id: "2"
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
       console.log(this.state) 
        event.preventDefault()
        this.props.register(this.state).then(() => {
            //console.log("State", this.state)
            this.props.history.push('/signin')});
    }
    render() {
        return (
            <div className="tab-content" id="tab2">
                <form method="post" className="register" onSubmit={this.handleSubmit}>
                    <p className="form-row form-row-wide">
                        <label htmlFor="username2">Username:
                        <i className="ln ln-icon-Male" />
                        <input type="text" className="input-text" name="name" id="username2" defaultValue = "" onChange={this.handleChange}/>
                        </label>
                    </p>
                    <p className="form-row form-row-wide">
                        <label htmlFor="email2">Email Address:
                        <i className="ln ln-icon-Mail" />
                        <input type="text" className="input-text" name="email" id="email2" defaultValue = "" onChange={this.handleChange}/>
                        </label>
                    </p>
                    <p className="form-row form-row-wide">
                        <label htmlFor="password1">Password:
                        <i className="ln ln-icon-Lock-2" />
                        <input className="input-text" type="password" name="password" id="password1" onChange={this.handleChange}/>
                        </label>
                    </p>
                    <p className="form-row form-row-wide">
                        <label htmlFor="password2">Repeat Password:
                        <i className="ln ln-icon-Lock-2" />
                        <input className="input-text" type="password" name="password_confirmation" id="password2" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p className="form-row">
                        <select name="user_type_id" defaultValue="2" onChange={this.handleChange}>
                            <option value="2">Employer</option>
                            <option value="3">Candidate</option>
                        </select>
                        <input type="submit" className="button border fw margin-top-10" name="register" defaultValue="Register" />
                    </p>
                </form>
            </div>


        );
    }
}
const mapDispatchToProps = dispatch => ({
    register: userInfo => dispatch(register(userInfo))
})
export default connect(null, mapDispatchToProps) (withRouter(Register))

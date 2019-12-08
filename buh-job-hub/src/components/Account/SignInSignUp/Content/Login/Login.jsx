import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="tab-content" id="tab1" style={{ display: 'none' }}>
                <form method="post" className="login">
                    <p className="form-row form-row-wide">
                        <label htmlFor="username">Username:
              <i className="ln ln-icon-Male" />
                            <input type="text" className="input-text" name="username" id="username" defaultValue />
                        </label>
                    </p>
                    <p className="form-row form-row-wide">
                        <label htmlFor="password">Password:
              <i className="ln ln-icon-Lock-2" />
                            <input className="input-text" type="password" name="password" id="password" />
                        </label>
                    </p>
                    <p className="form-row">
                        <input type="submit" className="button border fw margin-top-10" name="login" defaultValue="Login" />
                        <label htmlFor="rememberme" className="rememberme">
                            <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> Remember Me</label>
                    </p>
                    <p className="lost_password">
                        <a href="#">Lost Your Password?</a>
                    </p>
                </form>
            </div>

        );
    }
}

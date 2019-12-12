import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class TitleBar extends Component {
  render() {
    let path = "Login";
    if(this.props.type_id == "1")
      path = "Register"
    return (
      <div id="titlebar" className="single">
        <div className="container">
          <div className="sixteen columns">
          <h2>{path}</h2>
            <nav id="breadcrumbs">
              <ul>
                <li>You are here:</li>
                <li><Link to=''>Home</Link></li>
                <li>{path}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

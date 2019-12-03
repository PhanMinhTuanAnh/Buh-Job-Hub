import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    return (
      <div id="titlebar" className="single">
        <div className="container">
          <div className="sixteen columns">
            <h2>My Account</h2>
            <nav id="breadcrumbs">
              <ul>
                <li>You are here:</li>
                <li><a href="#">Home</a></li>
                <li>My Account</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

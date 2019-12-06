import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    return (
      <div id="titlebar">
        <div className="container">
          <div className="ten columns">
            <span>We've found 92 resumes for:</span>
            <h2>Web, Software &amp; IT</h2>
          </div>
          <div className="six columns">
            <a href="add-resume.html" className="button">Post a Resume, It’s Free!</a>
          </div>
        </div>
      </div>
    );
  }
}

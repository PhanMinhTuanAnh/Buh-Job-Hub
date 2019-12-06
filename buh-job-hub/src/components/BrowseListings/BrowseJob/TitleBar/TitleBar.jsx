import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    return (
      <div id="titlebar">
        <div className="container">
          <div className="ten columns">
            <span>We found 1,412 jobs matching:</span>
            <h2>Web, Software &amp; IT</h2>
          </div>
          <div className="six columns">
            <a href="dashboard-add-job.html" className="button">Post a Job, It’s Free!</a>
          </div>
        </div>
      </div>
    );
  }
}

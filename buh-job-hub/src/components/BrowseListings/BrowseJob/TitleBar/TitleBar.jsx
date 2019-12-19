import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TitleBar extends Component {
  render() {
    return (
      <div id="titlebar">
        <div className="container">
          <div className="ten columns">
            <span>We found 20 jobs matching:</span>
            <h2>Web, Software &amp; IT</h2>
          </div>
          <div className="six columns">
            <Link to="/dashboard/add-job" className="button">Post a Job, It’s Free!</Link>
          </div>
        </div>
      </div>
    );
  }
}

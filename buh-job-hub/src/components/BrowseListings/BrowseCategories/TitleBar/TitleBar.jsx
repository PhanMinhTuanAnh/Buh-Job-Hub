import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    return (
      <div id="titlebar" className="photo-bg" style={{ backgroundImage: `url(${require('./../../../../assets/images/all-categories-photo.jpg')} )` }}>
        <div className="container">
          <div className="ten columns">
            <h2>All Categories</h2>
          </div>
          <div className="six columns">
            <a href="dashboard-add-job.html" className="button">Post a Job, It’s Free!</a>
          </div>
        </div>
      </div>
    );
  }
}

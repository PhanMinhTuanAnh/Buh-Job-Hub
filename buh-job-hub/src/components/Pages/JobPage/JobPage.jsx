import React, { Component } from 'react'
import TitleBar from './TitleBar'
import Content from './Content'
import Widgets from './Widgets'

export default class JobPage extends Component {
  render() {
    return (
      <div>
        <div className="clearfix" />
        {/* Titlebar
      ================================================== */}
        <TitleBar />
        {/* Content
      ================================================== */}
        <div className="container">
          {/* Recent Jobs */}
          <Content />
          {/* Widgets */}
          <Widgets />
          {/* Widgets / End */}
        </div>
      </div>
    );
  }
}

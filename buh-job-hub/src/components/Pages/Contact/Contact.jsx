import React, { Component } from 'react'
import TitleBar from './TitleBar/TitleBar'
import Content from './Content/Content'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="clearfix" />
        <TitleBar />
        <Content />
      </div>
    );
  }
}
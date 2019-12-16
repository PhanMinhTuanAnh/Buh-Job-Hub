import React, { Component } from 'react'
import TitleBar from './TitleBar/TitleBar'
import Content from './Content/Content'
export default class SignInSignUp extends Component {
  render() {
    return (
      <div>
        <div className="clearfix" />
        <TitleBar type_id={this.props.type_id}/>
        <Content type_id={this.props.type_id}/>
      </div>
    );
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ListResume_Item extends Component {
    render() {
        return (
            <li><Link to={`/browse-resumes/${this.props.resume.id}`}>
                <img src={this.props.resume.user_image} alt="" />
                <div className="resumes-list-content">
                    <h4>{this.props.resume.user_name}<span>{this.props.resume.title}</span></h4>
                    <span><i className="fa fa-map-marker" /> {this.props.resume.location}</span>
                    <span><i className="fa fa-money" /> ${this.props.resume.current_salary} / hour</span>
                    <div className="skills">
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>WordPress</span>
                    </div>
                    <div className="clearfix" />
                </div>
            </Link>
                <div className="clearfix" />
            </li>
        );
    }
}

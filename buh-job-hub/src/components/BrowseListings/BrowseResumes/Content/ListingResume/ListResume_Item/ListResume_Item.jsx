import React, { Component } from 'react'

export default class ListResume_Item extends Component {
    render() {
        return (
            <li><a href="resume-page.html">
                <img src="images/resumes-list-avatar-01.png" alt="" />
                <div className="resumes-list-content">
                    <h4>John Doe <span>UX/UI Graphic Designer</span></h4>
                    <span><i className="fa fa-map-marker" /> Melbourne</span>
                    <span><i className="fa fa-money" /> $100 / hour</span>
                    <p>Over 8000 hours on oDesk (only Drupal related). Highly motivated, goal-oriented, hands-on senior software engineer with extensive technical skills and over 15 years of experience in software development</p>
                    <div className="skills">
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>WordPress</span>
                    </div>
                    <div className="clearfix" />
                </div>
            </a>
                <div className="clearfix" />
            </li>
        );
    }
}

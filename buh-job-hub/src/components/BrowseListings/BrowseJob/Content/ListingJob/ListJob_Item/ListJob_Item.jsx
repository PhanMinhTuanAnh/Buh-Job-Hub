import React, { Component } from 'react'

export default class ListJob_Item extends Component {
    render() {
        return (
            <a href="job-page-alt.html" className="listing full-time">
                <div className="listing-logo">
                    <img src="images/job-list-logo-01.png" alt="" />
                </div>
                <div className="listing-title">
                    <h4>Marketing Coordinator - SEO / SEM Experience <span className="listing-type">Full-Time</span></h4>
                    <ul className="listing-icons">
                        <li><i className="ln ln-icon-Management" /> King</li>
                        <li><i className="ln ln-icon-Map2" /> Sydney</li>
                        <li><i className="ln ln-icon-Money-2" /> $5000 - $7000</li>
                        <li><div className="listing-date new">new</div></li>
                    </ul>
                </div>
            </a>
        );
    }
}

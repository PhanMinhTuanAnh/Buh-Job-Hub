import React, { Component } from 'react'

export default class Widgets extends Component {
    render() {
        return (
            <div className="five columns">
                {/* Sort by */}
                <div className="widget">
                    <h4>Overview</h4>
                    <div className="job-overview">
                        <ul>
                            <li>
                                <i className="fa fa-map-marker" />
                                <div>
                                    <strong>Location:</strong>
                                    <span>20180 Outer Dr Dearborn, MI 48124</span>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-user" />
                                <div>
                                    <strong>Job Title:</strong>
                                    <span>Food Service Specialist</span>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-clock-o" />
                                <div>
                                    <strong>Hours:</strong>
                                    <span>40h / week</span>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-money" />
                                <div>
                                    <strong>Rate:</strong>
                                    <span>$9.50 - $12.50 / hour</span>
                                </div>
                            </li>
                        </ul>
                        <a href="#small-dialog" className="popup-with-zoom-anim button">Apply For This Job</a>
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide apply-popup">
                            <div className="small-dialog-headline">
                                <h2>Apply For This Job</h2>
                            </div>
                            <div className="small-dialog-content">
                                <form action="#" method="get">
                                    <input type="text" placeholder="Full Name" defaultValue />
                                    <input type="text" placeholder="Email Address" defaultValue />
                                    <textarea placeholder="Your message / cover letter sent to the employer" defaultValue={""} />
                                    {/* Upload CV */}
                                    <div className="upload-info"><strong>Upload your CV (optional)</strong> <span>Max. file size: 5MB</span></div>
                                    <div className="clearfix" />
                                    <label className="upload-btn">
                                        <input type="file" multiple />
                                        <i className="fa fa-upload" /> Browse
                            </label>
                                    <span className="fake-input">No file selected</span>
                                    <div className="divider" />
                                    <button className="send">Send Application</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

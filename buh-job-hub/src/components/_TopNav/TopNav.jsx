import React from 'react';
import {Link} from 'react-router-dom'
class TopNav extends React.Component {
    render() {
        return (
            <>
                {/* Header
================================================== */}
                <header className="transparent sticky-header">
                    <div className="container">
                        <div className="sixteen columns">
                            {/* Logo */}
                            <div id="logo">
                                <h1><Link to="/"><img src={require('./../../images/logo2.png')} alt="Work Scout" /></Link></h1>
                            </div>
                            {/* Menu */}
                            <nav id="navigation" className="menu">
                                <ul id="responsive">
                                    <li><a id="current" href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home #1</a></li>
                                            <li><a href="index-2.html">Home #2</a></li>
                                            <li><a href="index-3.html">Home #3</a></li>
                                            <li><a href="index-4.html">Home #4</a></li>
                                            <li><a href="index-5.html">Home #5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="job-page.html">Job Page</a></li>
                                            <li><a href="job-page-alt.html">Job Page Alternative</a></li>
                                            <li><a href="resume-page.html">Resume Page</a></li>
                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                            <li><a href="icons.html">Icons</a></li>
                                            <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Browse Listings</a>
                                        <ul>
                                            <li><Link to="/browesjob">Browse Jobs</Link></li>
                                            <li><a href="browse-resumes.html">Browse Resumes</a></li>
                                            <li><a href="browse-categories.html">Browse Categories</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dashboard</a>
                                        <ul>
                                            <li><a href="dashboard.html">Dashboard</a></li>
                                            <li><a href="dashboard-messages.html">Messages</a></li>
                                            <li><a href="dashboard-manage-resumes.html">Manage Resumes</a></li>
                                            <li><a href="dashboard-add-resume.html">Add Resume</a></li>
                                            <li><a href="dashboard-job-alerts.html">Job Alerts</a></li>
                                            <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                                            <li><a href="dashboard-manage-TopNavlications.html">Manage TopNavlications</a></li>
                                            <li><a href="dashboard-add-job.html">Add Job</a></li>
                                            <li><a href="dashboard-my-profile.html">My Profile</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="float-right">
                                    <li><a href="my-account.html#tab2"><i className="fa fa-user" /> Sign Up</a></li>
                                    <li><a href="my-account.html"><i className="fa fa-lock" /> Log In</a></li>
                                </ul>
                            </nav>
                            {/* Navigation */}
                            <div id="mobile-navigation">
                                <a href="#menu" className="menu-trigger"><i className="fa fa-reorder" /></a>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default TopNav;

import React from 'react';
import {Link} from 'react-router-dom'
class Header extends React.Component {
    render() {
        let style = {
            background : "#202020",
            borderRadius : "3px"
        }
        return (
            <>
                <header className="sticky-header">
                    <div className="container">
                        <div className="sixteen columns">
                            <div id="logo">
                                <h1><Link to="/"><img src={require('../../assets/images/logo2.png')} alt="Work Scout" style={style}/></Link></h1>
                            </div>
                            <nav id="navigation" className="menu">
                                <ul id="responsive">
                                    <li><a href="#">Pages</a>
                                        <ul>
                                            <li ><Link to="/job-page">Job Page</Link></li>
                                            <li><a href="job-page-alt.html">Job Page Alternative</a></li>
                                            <li><Link to="/resume-page">Resume Page</Link></li>
                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                            <li><a href="icons.html">Icons</a></li>
                                            <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><Link to="/contact-page">Contact</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Browse Listings</a>
                                        <ul>
                                            <li><Link to="/browse-job">Browse Jobs</Link></li>
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
                                    <li><Link to="/account"><i className="fa fa-user" /> Sign Up</Link></li>
                                    <li><Link to="/account"><i className="fa fa-lock" /> Log In</Link></li>
                                </ul>
                            </nav>
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
export default Header;
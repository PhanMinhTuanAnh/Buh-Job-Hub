import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DashboardNav extends Component {
    render() {
        let style = {
            position : "absolute",
        }
        return (
            <div>
                <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
                <div className="dashboard-nav" style = {style}>
                    <div className="dashboard-nav-inner" >

                        <ul data-submenu-title="Start">
                            <li className="active"><Link to = '/dashboard'>Dashboard</Link></li>
                            <li><Link to = '/dashboard/message'>Messages <span className="nav-tag">2</span></Link></li>
                        </ul>
                        
                        <ul data-submenu-title="Management">
                        {
                                (localStorage.getItem('user') == '1')?
                                <li className="active-submenu"><a>For Admin</a>
                                <ul>
                                    <li><Link to = '/dashboard/manage-users'>Manage User <span className="nav-tag">12</span></Link></li>
                                    {/* <li><Link to = '/dashboard/manage-applications'>Manage Applications <span className="nav-tag">4</span></Link></li> */}
                                    <li><Link to = '/dashboard/add-user'>Add User</Link></li>
                                </ul>
                                </li>
                                :null
                            }
                            {
                                (localStorage.getItem('user') == '2')?
                                <li className="active-submenu"><a>For Employers</a>
                                <ul>
                                    <li><Link to = '/dashboard/manage-jobs'>Manage Jobs <span className="nav-tag">12</span></Link></li>
                                    {/* <li><Link to = '/dashboard/manage-applications'>Manage Applications <span className="nav-tag">4</span></Link></li> */}
                                    <li><Link to = '/dashboard/add-job'>Add Job</Link></li>
                                </ul>
                                </li>
                                :null
                            }
                            
                            {
                                (localStorage.getItem('user') == '3')?
                            <li className="active-submenu"><a>For Candidates</a>
                                <ul>
                                    <li><Link to = '/dashboard/manage-resumes'>Manage Resumes <span className="nav-tag">2</span></Link></li>
                                    <li><Link to = '/dashboard/job-alerts'>Job Alerts</Link></li>
                                    <li><Link to = '/dashboard/add-resume'>Add Resume</Link></li>
                                </ul>
                            </li>
                            :null
                        }	
                            </ul>	
                            

                        <ul data-submenu-title="Account">
                            <li><Link to = {`/dashboard/profile/${1}`}>My Profile</Link></li>
                            <li><Link to = '/'>Logout</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}


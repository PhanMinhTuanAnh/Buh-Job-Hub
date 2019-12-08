import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DashboardNav extends Component {
    render() {
        let style = {
            position : "absolute",
        }
        return (
            <div>
                <a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>
                <div class="dashboard-nav" style = {style}>
                    <div class="dashboard-nav-inner" >

                        <ul data-submenu-title="Start">
                            <li class="active"><Link to = '/dashboard/webinfo'>Dashboard</Link></li>
                            <li><a href="dashboard-messages.html">Messages <span class="nav-tag">2</span></a></li>
                        </ul>

                        <ul data-submenu-title="Management">
                            <li><a>For Employers</a>
                                <ul>
                                    <li><a href="dashboard-manage-jobs.html">Manage Jobs <span class="nav-tag">5</span></a></li>
                                    <li><a href="dashboard-manage-applications.html">Manage Applications <span class="nav-tag">4</span></a></li>
                                    <li><a href="dashboard-add-job.html">Add Job</a></li>
                                </ul>
                            </li>

                            <li><a>For Candidates</a>
                                <ul>
                                    <li><a href="dashboard-manage-resumes.html">Manage Resumes <span class="nav-tag">2</span></a></li>
                                    <li><a href="dashboard-job-alerts.html">Job Alerts</a></li>
                                    <li><a href="dashboard-add-resume.html">Add Resume</a></li>
                                </ul>
                            </li>	
                        </ul>	

                        <ul data-submenu-title="Account">
                            <li><a href="dashboard-my-profile.html">My Profile</a></li>
                            <li><a href="index.html">Logout</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}


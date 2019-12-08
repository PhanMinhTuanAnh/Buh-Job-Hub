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
                            <li class="active"><Link to = '/dashboard'>Dashboard</Link></li>
                            <li><Link to = '/dashboard/message'>Messages <span class="nav-tag">2</span></Link></li>
                        </ul>

                        <ul data-submenu-title="Management">
                            <li class="active-submenu"><a>For Employers</a>
                                <ul>
                                    <li><Link to = '/dashboard/manage-jobs'>Manage Jobs <span class="nav-tag">5</span></Link></li>
                                    <li><Link to = '/dashboard/manage-applications'>Manage Applications <span class="nav-tag">4</span></Link></li>
                                    <li><Link to = '/dashboard/add-job'>Add Job</Link></li>
                                </ul>
                            </li>

                            <li class="active-submenu"><a>For Candidates</a>
                                <ul>
                                    <li><Link to = '/dashboard/manage-resumes'>Manage Resumes <span class="nav-tag">2</span></Link></li>
                                    <li><Link to = '/dashboard/job-alerts'>Job Alerts</Link></li>
                                    <li><Link to = '/dashboard/add-resume'>Add Resume</Link></li>
                                </ul>
                            </li>	
                        </ul>	

                        <ul data-submenu-title="Account">
                            <li><Link to = '/dashboard/profile'>My Profile</Link></li>
                            <li><Link to = '/'>Logout</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}


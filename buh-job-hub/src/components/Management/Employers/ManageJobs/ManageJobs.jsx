import React, { Component } from 'react';
import ManageJobsItem from './ManageJobsItem/ManageJobsItem';

export default class ManageJobs extends Component {
    render() {
        return (
            <div>
                <div class="dashboard-content">

                    <div id="titlebar">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Manage Resumes</h2>
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Manage Resumes</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12">

                            <div class="notification notice">
                                Your listings are shown in the table below. Expired listings will be automatically removed after 30 days.
                            </div>

                            <div class="dashboard-list-box margin-top-30">
                                <div class="dashboard-list-box-content">


                                    <table class="manage-table responsive-table">

                                        <tr>
                                            <th><i class="fa fa-file-text"></i> Title</th>
                                            <th><i class="fa fa-check-square-o"></i> Filled?</th>
                                            <th><i class="fa fa-calendar"></i> Date Posted</th>
                                            <th><i class="fa fa-calendar"></i> Date Expires</th>
                                            <th><i class="fa fa-user"></i> Applications</th>
                                            <th></th>
                                        </tr>
                                                
                                        <ManageJobsItem/>

                                    </table>

                                </div>
                            </div>
                            <a href="#" class="button margin-top-30">Add New Listing</a>
                        </div>


                        <div class="col-md-12">
                            <div class="copyrights">© 2019 WorkScout. All Rights Reserved.</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class JobAlerts extends Component {
    render() {
        return (
            <div>
                <div class="dashboard-content">

                    <div id="titlebar">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Job Alerts</h2>
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Job Alerts</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12">

                            <div class="dashboard-list-box margin-top-0">
                                <div class="dashboard-list-box-content">

                                    <table class="manage-table resumes responsive-table">

                                        <tr>
                                            <th><i class="fa fa-file-text"></i> Alert Name</th>
                                            <th><i class="fa fa-calendar"></i> Date Created</th>
                                            <th><i class="fa fa-tags"></i> Keywords</th>
                                            <th><i class="fa fa-map-marker"></i> Location</th>
                                            <th><i class="fa fa-clock-o"></i> Frequency</th>
                                            <th><i class="fa fa-check-square-o"></i> Status</th>
                                            <th></th>
                                        </tr>

                                        <tr>
                                            <td class="alert-name">Web Dev Job</td>
                                            <td>September 30, 2019</td>
                                            <td class="keywords">Web Developer, PHP, HTML</td>
                                            <td>London</td>
                                            <td>Daily</td>
                                            <td>Enabled</td>
                                            <td class="action">
                                                <a href="#"><i class="fa fa-check-circle-o"></i> Show Results</a>
                                                <a href="#"><i class="fa fa-envelope"></i> Email</a>
                                                <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                                <a href="#"><i class="fa  fa-eye-slash"></i> Disable</a>
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="alert-name">Q&A Testing</td>
                                            <td>September 30, 2019</td>
                                            <td class="keywords">Q&A, testing, mobile applications tests</td>
                                            <td>London</td>
                                            <td>Daily</td>
                                            <td>Enabled</td>
                                            <td class="action">
                                                <a href="#"><i class="fa fa-check-circle-o"></i> Show Results</a>
                                                <a href="#"><i class="fa fa-envelope"></i> Email</a>
                                                <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                                <a href="#"><i class="fa  fa-eye-slash"></i> Disable</a>
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                            </div>
                            <a href="#" class="button margin-top-30">Add Alert</a>
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

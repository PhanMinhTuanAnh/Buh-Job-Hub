import React, { Component } from 'react';

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
                                                
                                        <tr>
                                            <td class="title"><a href="#">Marketing Coordinator - SEO / SEM Experience <span class="pending">(Pending Approval)</span></a></td>
                                            <td class="centered">-</td>
                                            <td>September 30, 2015</td>
                                            <td>October 10, 2015</td>
                                            <td class="centered">-</td>
                                            <td class="action">
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>
                                                
                                        <tr>
                                            <td class="title"><a href="#">Web Developer - Front End Web Development, Relational Databases</a></td>
                                            <td class="centered">-</td>
                                            <td>September 30, 2015</td>
                                            <td>October 10, 2015</td>
                                            <td class="centered"><a href="dashboard-manage-applications.html" class="button">Show (4)</a></td>
                                            <td class="action">
                                                <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                                <a href="#"><i class="fa  fa-check "></i> Mark Filled</a>
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>	

                                        <tr>
                                            <td class="title"><a href="#">Power Systems User Experience Designer</a></td>
                                            <td class="centered"><i class="fa fa-check"></i></td>
                                            <td>May 16, 2015</td>
                                            <td>June 30, 2015</td>
                                            <td class="centered"><a href="dashboard-manage-applications.html" class="button">Show (9)</a></td>
                                            <td class="action">
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>

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

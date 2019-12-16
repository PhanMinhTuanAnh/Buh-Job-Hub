import React, { Component } from 'react';
import ManageApplicationsItem from './ManageApplicationsItem/ManageApplicationsItem';
import { actFetchAllUserInPost } from './../../../../react-redux/index_actions';
export default class ManageApplications extends Component {
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
        }
    }
    render() {
        
        return (
            <div>
                <div class="dashboard-content">
                    <div id="titlebar">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Manage Applications</h2>
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Manage Applications</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12">

                            <div class="notification notice">
                                The job applications for <strong><a href="#">Power Systems User Experience Designer</a></strong> are listed below.
                            </div>
                        </div>

                        <div class="col-md-6">
                            <select data-placeholder="Filter by status" class="chosen-select-no-single">
                                <option value="">Filter by status</option>
                                <option value="new">New</option>
                                <option value="interviewed">Interviewed</option>
                                <option value="offer">Offer extended</option>
                                <option value="hired">Hired</option>
                                <option value="archived">Archived</option>
                            </select>
                            <div class="margin-bottom-15"></div>
                        </div>

                        <div class="col-md-6">
                            <select data-placeholder="Newest first" class="chosen-select-no-single">
                                <option value="">Newest first</option>
                                <option value="name">Sort by name</option>
                                <option value="rating">Sort by rating</option>
                            </select>
                            <div class="margin-bottom-35"></div>
                        </div>

                    <div class="col-md-12">
                        <ManageApplicationsItem id = {this.props.match.params.id}/>
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

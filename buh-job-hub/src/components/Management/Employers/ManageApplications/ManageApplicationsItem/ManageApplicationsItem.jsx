import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actFetchAllUserInPost } from './../../../../../react-redux/index_actions'
import { Link } from 'react-router-dom';
class ManageApplicationsItem extends Component {
    componentDidMount() {
        this.props.actFetchAllUserInPost(this.props.id)
    }
    render() {
        return (
            <>{this.showAllUserInPost(this.props.job_post_activities)}</>
        )
    }
    showAllUserInPost = (job_post_activities) => {
        return (
            job_post_activities.map((activity, index) => {
                return (
                    <div class="application" key={index}>
                        <div class="app-content">

                            <div class="info">
                                <img src="images/avatar-placeholder.png" alt="" />
                                <span>{activity.email}</span>
                                <ul>
                                    <li><a href="#"><i class="fa fa-file-text"></i> Download CV</a></li>
                                    <li><a href="#"><i class="fa fa-envelope"></i> Contact</a></li>
                                </ul>
                            </div>

                            <div class="buttons">
                                <a href="#one-3" class="button gray app-link"><i class="fa fa-pencil"></i> Edit</a>
                                <a href="#two-3" class="button gray app-link"><i class="fa fa-sticky-note"></i> Add Note</a>
                                <Link to="/dashboard/profile" class="button gray app-link"><i class="fa fa-plus-circle"></i> Show Details</Link>
                            </div>
                            <div class="clearfix"></div>

                        </div>

                        <div class="app-tabs">

                            <a href="#" class="close-tab button gray"><i class="fa fa-close"></i></a>

                            <div class="app-tab-content" id="one-3">

                                <div class="select-grid">
                                    <select data-placeholder="Application Status" class="chosen-select-no-single">
                                        <option value="">Application Status</option>
                                        <option value="new">New</option>
                                        <option value="interviewed">Interviewed</option>
                                        <option value="offer">Offer extended</option>
                                        <option value="hired">Hired</option>
                                        <option value="archived">Archived</option>
                                    </select>
                                </div>

                                <div class="select-grid">
                                    <input type="number" min="1" max="5" placeholder="Rating (out of 5)" />
                                </div>

                                <div class="clearfix"></div>
                                <a href="#" class="button margin-top-15">Save</a>
                                <a href="#" class="button gray margin-top-15 delete-application">Delete this application</a>

                            </div>

                            <div class="app-tab-content" id="two-3">
                                <textarea placeholder="Private note regarding this application"></textarea>
                                <a href="#" class="button margin-top-15">Add Note</a>
                            </div>

                            <div class="app-tab-content" id="three-3">
                                <i>Full Name:</i>
                                <span>{activity.email.split('@')[0]}</span>

                                <i>Email:</i>
                                <span><a href="/cdn-cgi/l/email-protection#274c46534f5e09454255555e67425f464a574b420944484a"><span class="__cf_email__" data-cfemail="4922283d2130672b2c3b3b30092c31282439252c672a2624">[email&#160;protected]</span></a></span>
                            </div>

                        </div>


                        <div class="app-footer">

                            <div class="rating four-stars">
                                <div class="star-rating"></div>
                                <div class="star-bg"></div>
                            </div>

                            <ul>
                                <li><i class="fa fa-file-text-o"></i> Interviewed</li>
                                <li><i class="fa fa-calendar"></i> September 26, 2019</li>
                            </ul>
                            <div class="clearfix"></div>

                        </div>
                    </div>
                )
            })
        )
    }
}
const mapStateToProps = (state) => {
    return {
        job_post_activities: state.job_post_activities,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchAllUserInPost: (id) => {
            dispatch(actFetchAllUserInPost(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageApplicationsItem);
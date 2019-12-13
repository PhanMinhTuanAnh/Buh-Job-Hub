import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../react-redux/index_actions';
import { Link } from 'react-router-dom';


class ManageResumes extends Component {
    componentDidMount(){
        this.props.actFetchResumesRequest();
    }

    render() {
        console.log(this.props.resumes)
        return (
            <div>
                <div class="dashboard-content">

                <div id="titlebar">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Manage Resumes</h2>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li>Manage Resumes</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>


                <div class="row">
                    
                    <div class="col-lg-12 col-md-12">

                        {/* <div class="notification notice">
                            Your resume can be viewed, edited or removed below.
                        </div> */}

                        <div class="dashboard-list-box margin-top-30">
                            <div class="dashboard-list-box-content">

                                    <table class="manage-table resumes responsive-table">

                                        <tr>
                                            <th><i class="fa fa-user"></i> Name</th>
                                            <th><i class="fa fa-file-text"></i> Title</th>
                                            <th><i class="fa fa-map-marker"></i> Location</th>
                                            <th><i class="fa fa-calendar"></i> Date Posted</th>
                                            <th></th>
                                        </tr>

                                        {/* <tr>
                                            <td class="title"><a href="#">John Doe</a></td>
                                            <td>Front End Web Developer</td>
                                            <td>New York</td>
                                            <td>September 30, 2015</td>
                                            <td class="action">
                                                <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                                <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="title"><a href="#">John Doe</a></td>
                                            <td>Logo Designer</td>
                                            <td>New York</td>
                                            <td>August 12, 2015</td>
                                            <td class="action">
                                                <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                                <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                            </td>
                                        </tr>	 */}

                                    </table>
                            </div>
                        </div>
                        <a href="#" class="button margin-top-30">Add Resume</a>
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
const mapStateToProps = (state) => {
    return {
        resumes: state.resumes_reducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchResumesRequest: () => {
            dispatch(actions.actFetchResumesRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageResumes);
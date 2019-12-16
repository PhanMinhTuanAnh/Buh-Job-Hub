import React, { Component } from 'react'
import * as actions from './../../../../../react-redux/index_actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class ResumesTable extends Component {

    componentDidMount(){
        this.props.actFetchResumesRequest();
    }

    renderResume = (resumes) => {
        return(
            this.props.resumes.map((resume, key) => {
                let currentid = 1;
                if(resume.user_id == currentid)
                    return(
                        <tr>
                            <td class="title"><a href="#">{resume.user_name}</a></td>
                            <td>{resume.title}</td>
                            <td>{resume.location}</td>
                            <td>{resume.created_at_convert}</td>
                            <td class="action">
                                <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                            </td>
                        </tr>
                    )
                else
                    return null;
            })
        )
    }

    renderResumeTable = () => {
        return(
            <div class="row">

                <div>                    
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


                                        {this.renderResume()}

                                    </table>
                            </div>
                        </div>
                        <Link to="/dashboard/add-resume" class="button margin-top-30">Add Resume</Link>

                    </div>
                <div class="col-md-12">
                        <div class="copyrights">© 2019 WorkScout. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let {resumes} = this.props.resumes
        return (
            <>{this.renderResumeTable(resumes)}</>
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
export default connect(mapStateToProps, mapDispatchToProps)(ResumesTable);
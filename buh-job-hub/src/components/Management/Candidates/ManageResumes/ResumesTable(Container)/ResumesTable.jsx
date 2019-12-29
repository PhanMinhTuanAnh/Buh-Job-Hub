import React, { Component } from 'react'
import * as actions from './../../../../../react-redux/index_actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class ResumesTable extends Component {

    componentDidMount(){
        this.props.actFetchResumesRequest();
    }

    onClickDelete = (e) => {
        let id = e.target.id;
        this.props.actDeleteResumeRequest(id);
    }

    renderResume = () => {
        return(
            this.props.resumes.map((resume, key) => {
                let currentid = 53 ;
                if(resume.user_id == currentid)
                    return(
                        <tr>
                            <td className="title"><a href="#">{resume.user_name}</a></td>
                            <td>{resume.title}</td>
                            <td>{resume.location}</td>
                            <td>{resume.created_at_convert}</td>
                            <td className="action">
                                <Link to={`/dashboard/edit-resume/${resume.id}`}><i className="fa fa-pencil"></i> Edit</Link>
                                <a href="#"><i className="fa  fa-eye-slash"></i> Hide</a>
                                <Link id={resume.id} to="#" className="delete" onClick={this.onClickDelete}><i className="fa fa-remove"></i> Delete</Link>
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
            <div className="row">

                <div>                    
                    <div className="col-lg-12 col-md-12">

                        {/* <div className="notification notice">
                            Your resume can be viewed, edited or removed below.
                        </div> */}

                        <div className="dashboard-list-box margin-top-30">
                            <div className="dashboard-list-box-content">

                                    <table className="manage-table resumes responsive-table">

                                        <tr>
                                            <th><i className="fa fa-user"></i> Name</th>
                                            <th><i className="fa fa-file-text"></i> Title</th>
                                            <th><i className="fa fa-map-marker"></i> Location</th>
                                            <th><i className="fa fa-calendar"></i> Date Posted</th>
                                            <th></th>
                                        </tr>


                                        {this.renderResume()}

                                    </table>
                            </div>
                        </div>
                        <Link to="/dashboard/add-resume" className="button margin-top-30">Add Resume</Link>

                    </div>
                <div className="col-md-12">
                        <div className="copyrights">© 2019 WorkScout. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>{this.renderResumeTable()}</>
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
        },
        actDeleteResumeRequest: (id) => {
            dispatch(actions.actDeleteResumeRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResumesTable);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../.././../react-redux/index_actions'
class DashboardNav extends Component {

    componentDidMount(){
        this.props.actFetchResumesRequest();
    }

    getNum = () =>{
        let i = 0;
        this.props.resumes.map((resume, key)=>{
            if(resume.user_id == 53)
                i ++;
        })
        return i;
    }

    render() {


        let style = {
            position : "absolute",
        }
        return (
            <div>
                <a href="#" className="dashboard-responsive-nav-trigger"><i className="fa fa-reorder"></i> Dashboard Navigation</a>
                <div className="dashboard-nav" style = {style}>
                    <div className="dashboard-nav-inner" >

                        <ul data-submenu-title="Start">
                            <li className="active"><Link to = '/dashboard'>Dashboard</Link></li>
                            <li><Link to = '/dashboard/message'>Messages <span className="nav-tag">2</span></Link></li>
                        </ul>
                        
                        <ul data-submenu-title="Management">
                        {
                                (localStorage.getItem('user') == '1')?
                                <>
                                    <li><Link to = '/dashboard/manage-users'>Manage User <span className="nav-tag">12</span></Link></li>
                                    {/* <li><Link to = '/dashboard/manage-applications'>Manage Applications <span className="nav-tag">4</span></Link></li> */}
                                    <li><Link to = '/dashboard/add-user'>Add User</Link></li>
                                </>
                                :null
                            }
                            {
                                (localStorage.getItem('user') == '2')?
                                <>
                                    <li><Link to = '/dashboard/manage-jobs'>Manage Jobs <span className="nav-tag">12</span></Link></li>
                                    {/* <li><Link to = '/dashboard/manage-applications'>Manage Applications <span className="nav-tag">4</span></Link></li> */}
                                    <li><Link to = '/dashboard/add-job'>Add Job</Link></li>
                                </>
                                :null
                            }
                            
                            {
                                (localStorage.getItem('user') == '3')?
                                <>
                                    <li><Link to = '/dashboard/manage-resumes'>Manage Resumes <span className="nav-tag">{this.getNum()}</span></Link></li>
                                    <li><Link to = '/dashboard/add-resume'>Add Resume</Link></li>
                                </>
                            :null
                        }	
                        </ul>	
                            

                        <ul data-submenu-title="Account">
                            <li><Link to = {`/dashboard/profile/${1}`}>My Profile</Link></li>
                            <li><Link to = '/'>Logout</Link></li>
                        </ul>
                        
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
        },
        actDeleteResumeRequest: (id) => {
            dispatch(actions.actDeleteResumeRequest(id))
        },
        actAddResumeRequest: (resume) =>{
            dispatch(actions.actAddResumeRequest(resume))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);
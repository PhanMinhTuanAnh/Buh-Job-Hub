import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../../../../../react-redux/index_actions';
import { Link } from 'react-router-dom';
class ListJob_Item extends Component {
    componentDidMount() {
        console.log("first")
        this.props.actFetchJobPostsRequest();
    }
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.job_posts) {
            var {job_posts} = nextProps;
            this.state = {
                jobs: job_posts
            }
        }
    }
    showBrowesJob = (jobs) => {
        return (
            jobs.map((job, index) => {
                return (
                    
                    <Link key={index} to={`/browse-jobs/${job.id}`} className="listing full-time">
                        <div className="listing-logo">
                            <img src="http://www.vasterad.com/themes/workscout_2019/images/company-logo.png" alt="" />
                        </div>
                        <div className="listing-title">
                            <h4>{job.job_description} <span className="listing-type">Full-Time</span></h4>
                            <ul className="listing-icons">
                                <li><i className="ln ln-icon-Management" /> King</li>
                                <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                <li><i className="ln ln-icon-Money-2" /> $5000 - $7000</li>
                                <li><div className="listing-date new">new</div></li>
                            </ul>
                        </div>
                    </Link>
                )
            })
        );
    }
    render() {
        var { jobs } = this.state
        return (

            <>{this.showBrowesJob(jobs)}</>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        job_posts: state.job_posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchJobPostsRequest: () => {
            dispatch(actions.actFetchJobPostsRequest())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListJob_Item);

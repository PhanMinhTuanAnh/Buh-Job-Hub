import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actFetchJobPostsRequest } from './../../../../../react-redux/index_actions';
import { Link } from 'react-router-dom';
class ManageJobsItem extends Component {
    componentDidMount() {
        this.props.actFetchJobPostsRequest();
    }
    render() {
        var { job_posts } = this.props
        return (
            <>{this.showJobPost(job_posts)}</>

        )
    }
    showJobPost = (job_posts) => {
        return (
            job_posts.map((job_post, index) => {
                return (
                    <tr key={index}>
                        <td class="title"><a href="#">{job_post.job_description}</a></td>
                        <td class="centered">-</td>
                        <td>{job_post.created_at}</td>
                        <td>{job_post.updated_at}}</td>
                        <td class="centered"><Link to={`/dashboard/manage-jobs/${job_post.id}`} class="button">Show (4)</Link></td>
                        <td class="action">
                            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                            <a href="#"><i class="fa  fa-check "></i> Mark Filled</a>
                            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                        </td>
                    </tr>
                )
            })
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
            dispatch(actFetchJobPostsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageJobsItem);
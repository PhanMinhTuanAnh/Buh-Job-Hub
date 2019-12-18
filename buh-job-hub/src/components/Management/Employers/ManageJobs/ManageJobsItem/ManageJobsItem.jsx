import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../react-redux/index_actions';
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
    onDelete = (id) => {
        if (confirm('You sure delete this product ? ')) {// eslint-disable-line
            this.props.actDeleteJobPostRequest(id);
        }
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
                        <td class="centered"><Link to={`/dashboard/manage-jobs/${job_post.id}`} class="button">Show</Link></td>
                        <td class="action">
                            <Link to={`/dashboard/manage-jobs/${job_post.id}/edit`}><i class="fa fa-pencil"></i> Edit</Link>
                            <a href="#"><i class="fa  fa-check "></i> Mark Filled</a>
                            <a href="#" class="delete" onClick={() => this.onDelete(job_post.id)} ><i class="fa fa-remove" ></i> Delete</a>
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
            dispatch(actions.actFetchJobPostsRequest())
        },
        actDeleteJobPostRequest: (id) => {
            dispatch(actions.actDeleteJobPostRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageJobsItem);
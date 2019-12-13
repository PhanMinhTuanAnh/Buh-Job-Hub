import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchJobPostsRequest = () => {
    return (dispatch) => {
        return callApi('job_posts', 'GET', null).then(res => {
            dispatch(actJobPosts(res.data))
        });
    }
}
export const actJobPosts = (job_posts) => {
    return {
        type: types.FETCH_JOB_POSTS,
        job_posts
    }
}

//Add 
export const actAddJobPostRequest = (job_post) => {
    return (dispatch) => {
        return callApi('job_posts/', 'POST', job_post).then(res => {
            dispatch(actAddJobPost(res.data))
        });
    }
}
export const actAddJobPost = (job_post) => {
    return {
        type: types.ADD_JOB_POST,
        job_post
    }
}
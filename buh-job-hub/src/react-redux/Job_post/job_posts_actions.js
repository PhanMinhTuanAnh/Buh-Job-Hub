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
            // console.log(res)
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

//delete
export const actDeleteJobPostRequest = (id) => {
    return (dispatch) => {
        return callApi(`job_posts/${id}`, 'DELETE', null).then(res => {
            console.log(res)
            dispatch(actDeleteJobPost(id))
        });
    }
}
export const actDeleteJobPost = (id) => {
    return {
        type: types.DELETE_JOB_POST,
        id
    }
}
//editing job_post
export const actGetJobPostRequest = (id) => {
    return (dispatch) => {
        return callApi(`job_posts/${id}`, 'GET', null).then(res => {
            dispatch(actGetJobPost(res.data))
        });
    }
}
export const actGetJobPost = (job_post) => {
    return {
        type: types.EDIT_JOB_POST,
        job_post
    }
}
//update job_post
export const actUpdateJobPostRequest = (job_post) => {
    return (dispatch) => {
        return callApi(`job_posts/${job_post.id}`, 'PUT', job_post).then(res => {
            dispatch(actUpdateJobPost(res.data))
        });
    }
}
export const actUpdateJobPost = (job_post) => {
    return {
        type: types.UPDATE_JOB_POST,
        job_post
    }
}
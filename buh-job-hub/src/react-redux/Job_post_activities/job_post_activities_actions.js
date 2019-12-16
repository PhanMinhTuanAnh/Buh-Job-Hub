import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchAllUserInPost = (id) => {
    return (dispatch) => {
        return callApi(`job_posts/${id}/findAllUserInPost`, 'GET', null).then(res => {
            dispatch(actAllUserInPost(res.data))
        });
    }
}
export const actAllUserInPost = (job_post_activities) => {
    return {
        type: types.FETCH_ALL_USER_IN_JOB_POSTS,
        job_post_activities
    }
}
import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchJobPageRequest = (id) => {
    return (dispatch) => {
        return callApi(`job_posts/${id}/details/`, 'GET', null).then(res => {
            dispatch(actJobPage(res.data))
        });
    }
}
export const actJobPage = (job_page) => {
    return {
        type: types.GET_JOB_POST_DETAILS,
        job_page
    }
}
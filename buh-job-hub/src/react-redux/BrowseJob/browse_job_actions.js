import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchListJobsDetailsRequest = () => {
    return (dispatch) => {
        return callApi(`list_job_details/`, 'GET', null).then(res => {
            dispatch(actBroweJob(res.data))
        });
    }
}
export const actBroweJob = (browse_job) => {
    return {
        type: types.GET_LIST_JOB_POSTS_DETAILS,
        browse_job
    }
}
import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchJobTypesRequest = () => {
    return (dispatch) => {
        return callApi('job_types', 'GET', null).then(res => {
            dispatch(actJobTypes(res.data))
        });
    }
}
export const actJobTypes = (job_types) => {
    return {
        type: types.FETCH_JOB_TYPES,
        job_types
    }
}
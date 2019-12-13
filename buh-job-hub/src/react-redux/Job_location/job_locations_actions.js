import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchJobLocationsRequest = () => {
    return (dispatch) => {
        return callApi('job_locations', 'GET', null).then(res => {
            dispatch(actJobLocations(res.data))
        });
    }
}
export const actJobLocations = (job_locations) => {
    return {
        type: types.FETCH_JOB_LOCATIONS,
        job_locations
    }
}
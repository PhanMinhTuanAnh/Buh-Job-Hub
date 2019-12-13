import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchResumesRequest = () => {
    return (dispatch) => {
        return callApi('seeker_profiles', 'GET', null).then(res => {
            dispatch(actFetchResumes(res.data))
        });
    }
}
export const actFetchResumes = (resumes) => {
    return {
        type: types.FETCH_ALL_RESUME,
        resumes
    }
}
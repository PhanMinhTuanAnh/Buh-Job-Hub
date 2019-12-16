import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
import axios from 'axios';
let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3000'


//FETCH_ALL_RESUME
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


//DELETE_RESUME
export const actDeleteResumeRequest = (id) => {
    return (dispatch) => {
        return axios.delete(`${apiHost}/seeker_profiles/${id}`).then(res => {
            dispatch(actDeleteResume(res.data.id))
        }).catch(error => console.log(error)) ;
    };
}
export const actDeleteResume = (id) => {
    return {
        type: types.DELETE_RESUME,
        id
    }
}

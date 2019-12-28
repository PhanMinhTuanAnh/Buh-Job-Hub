import * as types from '../../constants/action_types_constant'
var initialState = {
    id:0,
    job_description: '',
    categories_id: 0,
    users_id : 0,
    job_types_id : 0,
    job_locations_id : 0,
    companies_id : 0
}
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_JOB_POST:
            state = action.job_post
            return state;
        default: return state;

    }
};
export default appReducer;
import * as types from '../../constants/action_types_constant'
var initialState = {};

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_JOB_POST_DETAILS:
            state = action.job_page
            return state;
        default: return state;
    }
};
export default appReducer;
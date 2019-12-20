import * as types from '../../constants/action_types_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_JOB_POSTS_DETAILS:
            state = action.browse_job
            return [...state];
        default: return state;
    }
};
export default appReducer;
import * as types from '../../constants/action_types_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_JOB_TYPES:
            state = action.job_types
            return [...state];
        default: return state;
    }
};
export default appReducer;
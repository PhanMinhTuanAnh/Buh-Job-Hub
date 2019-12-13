import * as types from '../../constants/action_types_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_JOB_LOCATIONS:
            state = action.job_locations
            return [...state];
        default: return state;
    }
};
export default appReducer;
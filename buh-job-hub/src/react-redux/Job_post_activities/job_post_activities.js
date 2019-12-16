import * as types from '../../constants/action_types_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_USER_IN_JOB_POSTS:
            state = action.job_post_activities
            console.log(state)
            return [...state];
        default: return state;
    }
};
export default appReducer;
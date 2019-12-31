import * as types from '../../constants/action_types_constant'
var initialState = []
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_JOB_POSTS:
            state = action.job_posts_filter
            return [...state];
        default: return state;

    }
};
export default appReducer;
import * as types from '../../constants/Job_post/job_post_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_JOB_POSTS:
            state = action.job_posts
            return [...state];
        default: return state;
    }
};
export default appReducer;
import * as types from '../../constants/action_types_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_JOB_POSTS:
            state = action.job_posts
            return [...state];
        case types.ADD_JOB_POST:
            state.push(action.job_post);
            return [...state];
        default: return state;
    }
};
export default appReducer;
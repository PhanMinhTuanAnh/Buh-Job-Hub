import * as types from '../../constants/action_types_constant'
var initialState = [];
var findIndex = (job_posts, id) => {
    var result = -1;
    job_posts.forEach((job_post, index) => {
        if (job_post.id === id) {
            result = index;
        }
    });
    return result;
}
var appReducer = (state = initialState, action) => {
    var index = -1;
    var { id, job_post } = action
    switch (action.type) {
        case types.FETCH_JOB_POSTS:
            state = action.job_posts
            return [...state];
        case types.ADD_JOB_POST:
            state.push(action.job_post);
            return [...state];
        case types.DELETE_JOB_POST:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case types.UPDATE_JOB_POST:
            index = findIndex(state, job_post.id)
            state[index] = job_post;
            return [...state];
        default: return state;
    }
};
export default appReducer;
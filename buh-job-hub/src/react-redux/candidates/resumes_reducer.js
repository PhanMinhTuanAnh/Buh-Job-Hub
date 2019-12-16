import * as types from '../../constants/action_types_constant'
var initialState = [];

var findIndex = (resumes, id) => {
    var result = -1;
    resumes.forEach((resume, index) => {
        if (resume.id === id) {
            result = index;
        }
    });
    return result;
}

var appReducer = (state = initialState, action) => {
    let index = -1;
    let {id, resumes} = action;
    switch (action.type) {
        case types.FETCH_ALL_RESUME:
            state = resumes
            return [...state];
        case types.DELETE_RESUME:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return state;
    }
};
export default appReducer;
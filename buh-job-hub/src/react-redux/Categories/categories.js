import * as types from '../../constants/action_types_constant'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            state = action.categories
            return [...state];
        default: return state;
    }
};
export default appReducer;
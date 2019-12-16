
import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('categories', 'GET', null).then(res => {
            dispatch(actCategories(res.data))
        });
    }
}
export const actCategories = (categories) => {
    return {
        type: types.FETCH_CATEGORIES,
        categories
    }
}
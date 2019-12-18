import * as types from '../../constants/action_types_constant'
import callApi from '../../utils/apiCaller'
export const actFetchCompaniesRequest = () => {
    return (dispatch) => {
        return callApi('companies', 'GET', null).then(res => {
            if(res){
                dispatch(actCompanies(res.data))
            }else{
                console.log('Data Not Found')
            }
        });
    }
}
export const actCompanies = (companies) => {
    return {
        type: types.FETCH_COMPANIES,
        companies
    }
}
import callApi from '../../utils/apiCaller'
export const register = user => {
  //console.log(user)
    return dispatch => {
        return callApi('users/', 'POST', user)
        .then(data => {
          if (!data) {
            window.location.reload();
          } else {
            //console.log("data",data)      
         }
        })
    }
  }
  
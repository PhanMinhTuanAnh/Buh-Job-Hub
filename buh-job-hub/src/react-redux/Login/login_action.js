import callApi from '../../utils/apiCaller'
export const userLoginFetch = user => {
  console.log(user)
    return dispatch => {
        return callApi('authenticate', 'POST', user)
        .then(data => {
          if (!data) {
            window.location.reload();
          } else {
            console.log("data",data)
            localStorage.setItem("token", data.data.auth_token)
            dispatch(loginUser(data.data.user))
            
         }
        })
    }
  }
  const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
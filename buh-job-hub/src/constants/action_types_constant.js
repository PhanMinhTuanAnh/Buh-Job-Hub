export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return callApi('users/', 'POST', user).then(res => {
            dispatch(actAddUser(res.data))
        });
    }
}


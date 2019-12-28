import axios from 'axios';
import * as Config from './../constants/config_constant';

export default function callApi(endpoint, method = 'GET', body) {

    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {'Authorization':localStorage.getItem('token')}
    }).catch((err) => {
        console.log(`${Config.API_URL}/${endpoint}`)
        console.log(err);
    })
};
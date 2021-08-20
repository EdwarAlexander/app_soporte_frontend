import axios from 'axios';
import {getTokenSession} from '../util/auth';

const http = axios.create({
    baseURL: process.env.REACT_APP_URL
});

function configRequestSuccess(config){
    /*const token = getTokenSession();
    if(token){
        config.headers.Autorization = `Bearer ${token}`;
    }*/
    return config;
}

http.interceptors.request.use(configRequestSuccess);

export default http;
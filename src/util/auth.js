import Cookies from 'js-cookie';
import { tokenName } from './constants';

const setTokenSession = (token, expiration) => {
    Cookies.set(
        tokenName,
        token,
        {
            expires: expiration
        }
    )
}

const getTokenSession = () => {
    return Cookies.get(tokenName);
}

export {
    setTokenSession,
    getTokenSession
}
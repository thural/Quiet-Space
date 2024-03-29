import {getApiResponse} from "./commonRequest";

export const fetchSignup = async (url, body) => {
    try {
        return await getApiResponse(url, 'POST', body, null);
    } catch (error) { console.log(error) }
}

export const fetchLogin = async (url, body) => {
    try {
        return await getApiResponse(url, 'POST', body, null);
    } catch (error) { console.log(error) }
}

export const fetchLogout = async (url, token) => {
    try {
        return await getApiResponse(url, 'POST', null, token);
    } catch (error) { console.log(error) }
}
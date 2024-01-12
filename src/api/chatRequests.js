import {getApiResponse} from "./commonRequest";

export const fetchChats = async (url, token) => {
    try {
        return await getApiResponse(url, 'GET', null, token);
    } catch (err) { console.log(err) }
}

export const fetchCreateMessage = async (url, body, token) => {
    try {
        return await getApiResponse(url, 'POST', body, token);
    } catch (err) { console.log(err) }
}

// export const fetchEditPost = async (url, body, token, postId) => {
//     try {
//         return await getApiResponse(url + `/${postId}`, 'PUT', body, token);
//     } catch (err) { console.log(err) }
// }

export const fetchDeleteMessage = async (url, token, messageId) => {
    try {
        return await getApiResponse(url + `/${messageId}`, 'DELETE', null, token);
    } catch (err) { console.log(err) }
}

// export const fetchLikePost = async (url, body, token) => {
//     try {
//         return await getApiResponse(url, 'POST', body, token);
//     } catch (err) { console.log(err) }
// }
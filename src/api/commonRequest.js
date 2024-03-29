

export async function getApiResponse(url, method, body, token) {

    const headers = new Headers({ 'content-type': 'application/json' });
    headers.append("Access-Control-Allow-Headers", "Location");
    if (token != null) headers.append("Authorization", "Bearer " + token);

    const options = {
        method: method,
        headers: headers
    };

    if (body != null) options.body = JSON.stringify(body);

    return await fetch(url, options);

}






let status;
export const get = (url) => {
    return fetch(url, {
        method: "GET",
        headers: new Headers({
            'Accept': 'application/json;charset=utf-8',
            'Content-Type': 'application/json'
        }),
    }).then(response => {
        status = response.status;
        return response.json();
    }).then(json => {
        return {data: json, status}
    }).catch((err) => {
        return err;
    });
};

export const post = (url, data) => {
    return fetch(url, {
        method: "POST",
        headers: new Headers({
                'Accept': 'application/json;charset=utf-8',
                'Content-Type': 'application/json'
            }
        ),
        body: JSON.stringify(data)
    }).then(response => {
        status = response.status;
        return response ? response.json() : "";
    }).then(json => {
        return {data: json, status}
    }).catch((err) => {
        return err;
    });
};


export const _delete = (url) => {
    return fetch(url, {
        method: "DELETE",
        headers: new Headers({
                'Accept': 'application/json;charset=utf-8',
                'Content-Type': 'application/json'
            }
        )
    }).then(response => {
        status = response.status;
        return response ? response.json() : "";
    }).then(json => {
        return {data: json, status}
    }).catch((err) => {
        return err;
    });
};


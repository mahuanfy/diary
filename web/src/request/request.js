let status;
export const get = (url, data) => {
    return fetch(url, {
        method: "GET",
        headers: new Headers({
            'Accept': 'application/json;charset=utf-8',
            'Content-Type': 'application/json'
        }),
    }).then(response => {
        status = response.status;
        return response.json();
    }).then(json =>{return {data:json, status}})
        .catch((err) => {
            return err;
        });
};


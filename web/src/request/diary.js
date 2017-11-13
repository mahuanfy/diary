const request = (url, body) => {
    fetch(url, {
        method: "GET",
        headers: new Headers({
            'Accept': 'application/json;charset=utf-8'
        })
    }).then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
};

module.exports = {
    request
};

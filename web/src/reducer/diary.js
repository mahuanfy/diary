export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_DIARY':
            return action.content;
    }
    return state;
}

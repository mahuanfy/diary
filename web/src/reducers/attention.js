export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_FOLLOWERS':
            return action.content;
    }
    return state;
}

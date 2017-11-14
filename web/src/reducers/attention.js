export default (state = {followers: [], followersDiaries: []}, action) => {
    switch (action.type) {
        case 'GET_ALL_FOLLOWERS':
            state.followers = action.content.followers;
            state.followersDiaries = action.content.followersDiaries;
            return Object.assign({}, state);
    }
    return state;
}

export default (state={"login":{},"users":[]},action)=>{
    switch (action.type){
        case "LOGIN":
            state.login = action.user;
            return Object.assign({},state);
        case "GET_ALL_USER":
            state.users = action.users;
            return Object.assign({},state);
    }
    return state;
}
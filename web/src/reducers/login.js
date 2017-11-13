export default (state={},action)=>{
    switch (action.type){
        case "LOGIN":
            return action.user;
    }
    return state;
}
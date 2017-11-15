import * as request from '../request/request'
import * as StatusCode from '../constants/StatusCode';

const login = (user) => {
    return {
        type: "LOGIN",
        user
    }
};

const allUser = (users)=>{
  return{
      type:"GET_ALL_USER",
      users
  }
};
export const getUser = (student) => {
    return dispatch => {
        request.get(`/api/user?name=${student.name}&&password=${student.password}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(login(result.data))
                }
            });
    }
};

export const getAllUser = () => {
    return dispatch => {
        request.get('/api/users')
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(allUser(result.data))
                }
            });
    }
};
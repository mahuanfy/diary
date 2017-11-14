import * as request from '../request/request'
import * as StatusCode from '../constants/StatusCode';
import * as  userActions from './diary';

const login = (user) => {
    return {
        type: "LOGIN",
        user
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
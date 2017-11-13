import * as request from '../request/request'
import * as STATUS from '../constants/StatusCode';

const login = (user)=>{
  return{
      type:"LOGIN",
      user
  }
};
export const getUser = (student) => {
    return dispatch => {
        request.get('/api/user?name=xueyuan&&password=123456', student)
            .then(result => {
                if (result.status === STATUS.OK) {
                    dispatch(login(result.data))
                }
            });
    }
};
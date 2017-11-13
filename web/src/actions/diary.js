import request from '../request/diary';

const allDiary = (content)=>{
    return{
        type:"GET_ALL_DIARY",
        content
    }
};

const getAllDiary = () => {
    return dispatch => {
        const res = request.request("/api/papers");
        if (res.status === 200) {
            dispatch(allDiary(res.body))
        }
    }
};

module.exports = {
    getAllDiary
};
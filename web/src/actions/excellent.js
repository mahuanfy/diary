import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

export const allDiary = (content) => {
    return {
        type: "GET_ALL_EXCELLENT_DIARY",
        content
    }
};

export const getAllExcellent = () => {
    return dispatch => {
        const res = request.get('/api/excellentDiaries')
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(allDiary(result.data));
                }
            })
    }
};

export const commentDiary = (comment) => {
    return dispatch => {
        request.post(`/api/comment`, comment)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(getAllExcellent());
                }
            });
    }
}

export const deleteDiary = (id) => {
    return dispatch => {
        request._delete(`/api/excellentDiary/${id}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(getAllExcellent());
                }
            });
    }
}


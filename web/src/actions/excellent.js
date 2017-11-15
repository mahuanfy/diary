import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';
import {message} from 'antd';

export const allDiary = (content) => {
    return {
        type: "GET_ALL_EXCELLENT_DIARY",
        content
    }
};

export const getAllExcellent = () => {
    return dispatch => {
        request.get('/api/excellentDiaries')
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
                if (result.status === StatusCode.CREATED) {
                    dispatch(getAllExcellent());
                }
            });
    }
}

export const recommend = (excellent) => {
    return dispatch => {
        request.post(`/api/excellentDiary`, excellent)
            .then(result => {
                if (result.status === StatusCode.CREATED) {
                    message.success("推荐成功");
                }
            });
    }
}

export const deleteDiary = (id) => {
    return dispatch => {
        request.del(`/api/excellentDiary/${id}`)
            .then(result => {
                if (result.status === StatusCode.NO_CONTENT) {
                    dispatch(getAllExcellent());
                    message.success("取消推荐成功");
                }
            });
    }
}


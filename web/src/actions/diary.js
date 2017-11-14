import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

export const allDiary = (content) => {
    return {
        type: "GET_ALL_DIARY",
        content
    }
};

export const getAllDiary = (userId) => {
    return dispatch => {
        const res = request.get(`/api/diaries/${userId}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(allDiary(result.data));
                }
            })
    }
};
export const addDiary = (diary) => {
    return dispatch => {
        request.post("/api/diary", diary)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(getAllDiary(diary.userId));
                }
            })
    }
}

export const deleteDiary = (diary) => {
    return dispatch => {
        request._delete(`/api/diary/${diary.id}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(getAllDiary(diary.userId));
                }
            });
    }
}


export const modifyDiary = (diary) => {
    return dispatch => {
        request.put(`/api/diary`,diary)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(getAllDiary(diary.userId));
                }
            });
    }
}


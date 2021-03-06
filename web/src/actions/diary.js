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
        request.get(`/api/diaries/${userId}`)
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
                if (result.status === StatusCode.CREATED) {
                    dispatch(getAllDiary(diary.userId));
                }
            })
    }
}

export const deleteDiary = (diary) => {
    return dispatch => {
        request.del(`/api/diary/${diary.id}`)
            .then(result => {
                if (result.status === StatusCode.NO_CONTENT) {
                    dispatch(getAllDiary(diary.userId));
                }
            });
    }
}


export const modifyDiary = (diary) => {
    return dispatch => {
        request.put(`/api/diary`,diary)
            .then(result => {
                if (result.status === StatusCode.CREATED) {
                    dispatch(getAllDiary(diary.userId));
                }
            });
    }
}

export const commentDiary = (comment) => {

    return dispatch => {
        request.post(`/api/comment`,comment)
            .then(result => {
                if (result.status === StatusCode.CREATED) {
                    dispatch(getAllDiary(comment.user.id));
                }
            });
    }
}

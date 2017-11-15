import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';
import {message} from 'antd';

export const allFollowers = (content) => {
    return {
        type: "GET_ALL_FOLLOWERS",
        content
    }
};

export const getAllFollowers = (userId) => {
    return dispatch => {
        request.get(`/api/followers/${userId}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    dispatch(allFollowers(result.data));
                }
            })
    }
};

export const follow = (follow) => {
    return dispatch => {
        request.post(`/api/follower`, follow)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    message.info('关注成功');
                    dispatch(getAllFollowers(follow.userId));
                }
            });
    }
};

export const unfollow = (follow) => {
    return dispatch => {
        request._delete(`/api/follower/${follow.userId}/${follow.followerId}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    message.info('取消关注成功');
                    dispatch(getAllFollowers(follow.userId));
                }
            });
    }
};


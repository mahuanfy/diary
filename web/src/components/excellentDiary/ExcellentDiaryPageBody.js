import React from 'react';

import {Card, Button, Row, Col} from 'antd';
import Comment from '../CommentInput';
import CommentList from '../CommentList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as excellentActions from '../../actions/excellent';
import moment from 'moment';

class ExcellentDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isComment: false}
    }

    componentWillMount() {
        this.props.getExcellentDiary();
    }

    comment = () => {
        this.setState({isComment: true})
    };

    cancelComment() {
        this.setState({isComment: false})
    }

    cancelRecommend(id) {
        this.props.deleteExcellent(id);
    }

    render() {
        const users = this.props.users;
        const excellent = this.props.excellentDiaries.map((ele, index) => {
            let name = users.find(user => user.id === ele.diary.userId).name;

            return <div key={index} style={{marginTop: 20}}>
                <Card title={name + ' 的日志'} extra={moment(ele.diary.time).format("YYYY-MM-DD")}>
                    <p>{ele.diary.content}</p>
                    <Row>
                        <Col offset={16} style={{marginTop: 20}}>
                            <Button style={{marginRight: 10}} type="primary" size={'small'} ghost
                                    onClick={this.comment}>评论日志</Button>
                            {this.props.user.roleId === 2 ?
                                <Button type="primary" size={'small'} ghost
                                        onClick={this.cancelRecommend.bind(this, ele.id)}>取消为优秀日志</Button>
                                :""
                            }
                        </Col>
                    </Row>

                    {this.state.isComment ?
                        <Comment diary={ele.diary} comment={this.props.comment} status='input'
                                 cancelComment={this.cancelComment.bind(this)}/> : ''}
                    {ele.diary.commentList.length > 0 ?
                        < CommentList comments={ele.diary.commentList} diaryId={ele.id}/> : ""
                    }
                </Card>
            </div>
        });

        return <div>
            {excellent}
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.Login.login,
        users: state.Login.users,
        excellentDiaries: state.ExcellentDiary
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getExcellentDiary: () => {
            dispatch(excellentActions.getAllExcellent())
        },
        comment: (comment) => {
            dispatch(excellentActions.commentDiary(comment))
        },
        deleteExcellent: (id) => {
            dispatch(excellentActions.deleteDiary(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExcellentDiaryPageBody))
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as diaryAction from '../../actions/diary';
import * as excellentAction from '../../actions/excellent';
import {Card, Button, Row, Col, Collapse} from 'antd';
import Comment from '../CommentInput';
import CommentList from '../CommentList';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

class FollowerDiaryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isComment: false}
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getPersonalDiary(id);
    }

    comment() {
        this.setState({isComment: true})
    };

    cancelComment() {
        this.setState({isComment: false})
    }

    recommend(id) {
        let time = moment(new Date()).format("YYYY-MM-DD");
        let excellent = {
            operatorId: this.props.user.id,
            time,
            "diary": {id}
        }

        this.props.recommend(excellent);
    }

    render() {
        const users = this.props.users;
        const excellent = this.props.diaries.map((ele, index) => {
            let name = users.find(user => user.id === ele.userId).name;
            return <div key={index} style={{marginTop: 20}}>
                <Card title={name + ' 的日志'} extra={moment(ele.time).format("YYYY-MM-DD")}>
                    <ReactMarkdown source={ele.content}/>
                    <Row>
                        <Col offset={16} style={{marginTop: 20}}>
                            <Button style={{marginRight: 10}} type="primary" size={'small'} ghost
                                    onClick={this.comment.bind(this)}>评论日志</Button>
                            <Button type="primary" size={'small'} ghost
                                    onClick={this.recommend.bind(this, ele.id)}>推荐优秀日志</Button>
                        </Col>
                    </Row>

                    {this.state.isComment ?
                        <Comment diary={ele} comment={this.props.comment} status='input'
                                 cancelComment={this.cancelComment.bind(this)}/> : ''}
                    {ele.commentList.length > 0 ?
                        <CommentList comments={ele.commentList} diaryId={ele.id}/> : ""
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
        diaries: state.Diary
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPersonalDiary: (id) => {
            dispatch(diaryAction.getAllDiary(id))
        },
        recommend: (excellent) => {
            dispatch(excellentAction.recommend(excellent));
        },
        comment: (comment) => {
            dispatch(diaryAction.commentDiary(comment))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowerDiaryList);

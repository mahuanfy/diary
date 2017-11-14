import React from 'react';

import {Card, Button, Row, Col, Collapse} from 'antd';
import Comment from '../CommentInput';
import CommentList from '../CommentList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as excellentActions from '../../actions/excellent';
import moment from 'moment';

const Panel = Collapse.Panel;

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

    cancelRecommendOrRecommend(id, oper) {
        oper === "cancel" ?
            this.props.deleteExcellent(id) :
            "";
    }

    render() {
        const users = this.props.users;
        const excellent = this.props.excellentDiaries.map((ele, index) => {
            let name = users.find(user => user.id === ele.diary.userId).name;
            let recommend = this.props.isRecommend ?
                <Button type="primary" size={'small'} ghost
                        onClick={this.cancelRecommendOrRecommend.bind(this, ele.id, "recommend")}>推荐优秀日志</Button>
                :
                <Button type="primary" size={'small'} ghost
                        onClick={this.cancelRecommendOrRecommend.bind(this, ele.id, "cancel")}>取消为优秀日志</Button>;


            return <div key={index} style={{marginTop: 20}}>
                <Card title={name + ' 的日志'} extra={moment(ele.diary.time).format("YYYY-MM-DD")}>
                    <p>{ele.diary.content}</p>
                    <Row>
                        <Col span={3}>查看全文</Col>
                        <Col offset={16} style={{marginTop: 20}}>
                            <Button style={{marginRight: 10}} type="primary" size={'small'} ghost
                                    onClick={this.comment}>评论日志</Button>
                            {recommend}
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
        deleteExcellent:(id)=>{
            dispatch(excellentActions.deleteDiary(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExcellentDiaryPageBody))
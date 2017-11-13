import React from 'react';

import {Card, Button, Row, Col, Collapse} from 'antd';
import Comment from '../CommentInput';
import CommentList from '../CommentList';

const Panel = Collapse.Panel;

export default class ExcellentDiaryPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isComment: false}
    }

    comment = () => {
        this.setState({isComment: true})
    };

    cancelComment() {
        this.setState({isComment: false})
    }

    cancelRecommendOrRecommend(id, oper) {

    }

    render() {

        const excellentDiary = [{"id": 1, "name": 'hhh', "content": 111111}];
        const excellent = excellentDiary.map((ele, index) => {
            let recommend = this.props.isRecommend ?
                <Button type="primary" size={'small'} ghost
                        onClick={this.cancelRecommendOrRecommend.bind(this, ele.id, "cancel")}>取消为优秀日志</Button>
                :
                <Button type="primary" size={'small'} ghost
                        onClick={this.cancelRecommendOrRecommend.bind(this, ele.id, "recommend")}>推荐优秀日志</Button>;

            return <div key={index} style={{marginTop: 20}}>
                <Card title={ele.name + ' 的日志'} extra={ele.time}>
                    <p>{ele.content}</p>
                    <Row>
                        <Col span={3}>查看全文</Col>
                        <Col offset={16} style={{marginTop: 20}}>
                            <Button style={{marginRight: 10}} type="primary" size={'small'} ghost
                                    onClick={this.comment}>评论日志</Button>
                            {recommend}
                        </Col>
                    </Row>

                    {this.state.isComment ?
                        <Comment status='input' cancelComment={this.cancelComment.bind(this)}/> : ''}
                    <CommentList diaryId={ele.id}/>

                </Card>
            </div>
        });

        return <div>
            {excellent}
        </div>
    }
}

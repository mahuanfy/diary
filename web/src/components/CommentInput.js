import React from 'react';
import {Input, Button, Row, Col} from 'antd';
import moment from 'moment';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryId: props.diary.id,
            user:{id:props.diary.userId} ,
            commentTime: moment(new Date()).format("YYYY-MM-DD"),
            comment: ''
        }
    }

    handle(e) {
        this.setState({"comment": e.target.value})
    }

    comment() {
        this.props.comment({...this.state})
        this.props.cancelComment();
    }

    render() {
        return <div style={{marginTop: 20}}>
            <Row>
                <Col offset={3}>
                    评论：<Input type="textarea" placeholder="发表你的看法" style={{width: 720}}
                              onChange={this.handle.bind(this)} autosize={{minRows: 2, maxRows: 6}}/>
                </Col>
                <Col offset={4}>

                    <Button type="primary" size={'small'} style={{marginRight: 10, marginTop: 10}}
                            onClick={this.comment.bind(this)}>提交</Button>
                    <Button size={'small'} onClick={this.props.cancelComment}>取消</Button>
                </Col>
            </Row>
        </div>


    }
};
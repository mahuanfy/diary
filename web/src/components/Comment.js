import React from 'react';
import {Input, Button, Row, Col} from 'antd';

export default class Comment extends React.Component {
    render() {
        return <div style={{marginTop:20} }>
            <Row>
                <Col offset={3}>
                    评论：<Input type="textarea" placeholder="发表你的看法" style={{width: 720}}
                              autosize={{minRows: 2, maxRows: 6}}/>
                </Col>
                <Col offset={4}>

                    <Button type="primary" size={'small'} style={{marginRight: 10, marginTop: 10}}>提交</Button>
                    <Button size={'small'} onClick={this.props.cancelComment}>取消</Button>
                </Col>
            </Row>
        </div>
    }
};